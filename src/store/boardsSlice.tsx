import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface IBoard {
    boards: {
        id: string;
        name: string;
    }[]
};
const initialState: IBoard = {
    boards: [],
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoards(state, action) {
            state.boards.push({
                id: nanoid(),
                name: action.payload.name,
            });
        },
        // addTables(state, action) {
        //     state.boards.tables.push({
        //         id: nanoid(),
        //         name: action.payload.name,
        //     });
        // },
    },
});

export const { addBoards } = boardsSlice.actions;
export default boardsSlice.reducer;