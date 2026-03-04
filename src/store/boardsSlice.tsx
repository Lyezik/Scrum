import { db } from "../firebase";
import { onSnapshot, collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createApi, fakeBaseQuery, } from '@reduxjs/toolkit/query/react';

export interface IBoard {
    id: string;
    name: string;
    ownerUid: string;
}

export interface IColumn {
    id: string;
    name: string;
}

export interface ITask {
    id: string;
    name: string;
    columnId: string;
    order: number;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Boards'],
    endpoints: (build) => ({
        subscribeAllBoards: build.query<IBoard[], void>({
            async queryFn() { return { data: [] }; },

            async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved }) {
                const ref = collection(db, "boards");

                const unsubscribe = onSnapshot(ref, (snapshot) => {
                    updateCachedData(() =>
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        })) as IBoard[]
                    );
                });
                await cacheEntryRemoved;  // ждём, пока кэш перестанет быть нужным
                unsubscribe();
            },
        }),

        subscribeAllColumns: build.query<IColumn[], { boardId: string }>({
            async queryFn() { return { data: [] }; },

            async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
                const { boardId } = arg;
                const ref = collection(db, `boards/${boardId}/columns`);

                const unsubscribe = onSnapshot(ref, (snapshot) => {
                    updateCachedData(() =>
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        })) as IColumn[]
                    );
                });
                await cacheEntryRemoved;  // ждём, пока кэш перестанет быть нужным
                unsubscribe();
            },
        }),

        subscribeAllTasks: build.query<ITask[], { boardId: string, columnId: string }>({
            async queryFn() { return { data: [] }; },

            async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
                const { boardId, columnId } = arg;
                const ref = collection(db, `boards/${boardId}/columns/${columnId}/tasks`);

                const unsubscribe = onSnapshot(ref, (snapshot) => {
                    updateCachedData(() =>
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        })) as ITask[]
                    );
                });
                await cacheEntryRemoved;  // ждём, пока кэш перестанет быть нужным
                unsubscribe();
            },
        }),

        addBoard: build.mutation({
            async queryFn(newBoard) {
                try {
                    await addDoc(collection(db, "boards"), newBoard);
                    return { data: null };
                } catch (e) {
                    return { error: e };
                }
            },
        }),

        addColumn: build.mutation({
            async queryFn({ boardId, columnName }) {
                try {
                    await addDoc(collection(db, `boards/${boardId}/columns`), {
                        name: columnName
                    });
                    return { data: null };
                } catch (e) {
                    return { error: e };
                }
            },
        }),

        addTask: build.mutation({
            async queryFn({ boardId, columnId, taskName }) {
                try {
                    await addDoc(collection(db, `boards/${boardId}/columns/${columnId}/tasks`), {
                        name: taskName
                    });
                    return { data: null };
                } catch (e) {
                    return { error: e };
                }
            },
        }),

        deleteBoard: build.mutation<void, { boardId: string }>({
            async queryFn({ boardId }) {
                try {
                    async function deleteCollection(path: string) {
                        const colRef = collection(db, path);
                        const snapshot = await getDocs(colRef);

                        const promises = snapshot.docs.map((d) =>
                            deleteDoc(doc(db, path, d.id))
                        );

                        await Promise.all(promises);
                    }

                    async function deleteBoardWithColumnsAndTasks(boardId: string) {
                        const columnsSnap = await getDocs(collection(db, `boards/${boardId}/columns`));

                        const deleteTasksPromises = columnsSnap.docs.map(async (columnDoc) => {
                            const columnId = columnDoc.id;
                            await deleteCollection(`boards/${boardId}/columns/${columnId}/tasks`);
                        });

                        await Promise.all(deleteTasksPromises);

                        await deleteCollection(`boards/${boardId}/columns`);

                        await deleteDoc(doc(db, `boards/${boardId}`));
                    }

                    await deleteBoardWithColumnsAndTasks(boardId);
                    return { data: undefined };
                } catch (error) {
                    return { error };
                }
            }
        }),

        deleteColumn: build.mutation<void, { boardId: string; columnId: string }>({
            async queryFn({ boardId, columnId }) {
                try {
                    async function deleteCollection(path: string) {
                        const colRef = collection(db, path);
                        const snapshot = await getDocs(colRef);

                        const promises = snapshot.docs.map((d) =>
                            deleteDoc(doc(db, path, d.id))
                        );

                        await Promise.all(promises);
                    }

                    async function deleteColumnWithTasks(boardId: string, columnId: string) {
                        await deleteCollection(`boards/${boardId}/columns/${columnId}/tasks`);
                        await deleteDoc(doc(db, `boards/${boardId}/columns/${columnId}`));
                    }

                    await deleteColumnWithTasks(boardId, columnId);
                    return { data: undefined };
                } catch (error) {
                    return { error };
                }
            },

            onQueryStarted: async ({ boardId, columnId }, { dispatch, queryFulfilled }) => {
                const patch = dispatch(
                    api.util.updateQueryData("subscribeAllColumns", { boardId }, (draft) => {
                        return draft.filter((col) => col.id !== columnId);
                    })
                );

                try {
                    await queryFulfilled;
                } catch {
                    patch.undo();
                }
            }
        }),

        deleteTask: build.mutation<void, { boardId: string; columnId: string; taskId: string }>({
            async queryFn({ boardId, columnId, taskId }) {
                try {
                    const path = `boards/${boardId}/columns/${columnId}/tasks`;
                    await deleteDoc(doc(db, path, taskId))
                    return { data: undefined };
                } catch (error) {
                    return { error };
                }
            },
        }),

    }),
})



export const {
    useSubscribeAllBoardsQuery,
    useSubscribeAllColumnsQuery,
    useSubscribeAllTasksQuery,
    useAddBoardMutation,
    useAddColumnMutation,
    useAddTaskMutation,
    useDeleteBoardMutation,
    useDeleteColumnMutation,
    useDeleteTaskMutation
} = api
