import { db } from "../firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

export interface IBoard {
    id: string;
    name: string;
    ownerUid: string;
}

export interface IColumn {
    id: string;
    name: string;
}

import { createApi, fakeBaseQuery, } from '@reduxjs/toolkit/query/react'

export const boardsApi = createApi({
    reducerPath: 'boardsApi',
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
            // это не нужно, потому что у нас и так постоянно отслеживаются изменения???

            // providesTags: (result) =>
            //     result
            //         ? [...result.map(({ id }) => ({ type: 'Boards' as const, id })), 'Boards']
            //         : ['Boards'  as const],
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

        subscribeAllTasks: build.query<IColumn[], { boardId: string, columnId: string }>({
            async queryFn() { return { data: [] }; },

            async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
                const { boardId, columnId } = arg;
                const ref = collection(db, `boards/${boardId}/columns/${columnId}/tasks`);

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
        })

    }),
})


export const {
    useSubscribeAllBoardsQuery,
    useSubscribeAllColumnsQuery,
    useSubscribeAllTasksQuery,
    useAddBoardMutation,
    useAddColumnMutation,
    useAddTaskMutation
} = boardsApi
