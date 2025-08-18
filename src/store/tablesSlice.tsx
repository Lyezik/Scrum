import { createSlice } from "@reduxjs/toolkit";

interface ITable {
    tables: {
        id: string;
        title: string;
    }[];
}
const initialState: ITable = {
    tables: [],
};

const tablesSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        addTables(state, action) {
            state.tables.push({
                id: new Date().toISOString(),
                title: action.payload.name,
            });
        },
    },
});

export const { addTables } = tablesSlice.actions;
export default tablesSlice.reducer;