import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


interface ITable {
    tables: {
        id: string;
        title: string;
    }[];
};

const initialState: ITable = {
    tables: [],
};

const tablesSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        addTables(state, action) {
            state.tables.push({
                id: nanoid(),
                title: action.payload.title,
            });
            console.log(initialState)
        },
    },
});

export const { addTables } = tablesSlice.actions;
export default tablesSlice.reducer;