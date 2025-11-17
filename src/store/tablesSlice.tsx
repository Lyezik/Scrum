// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
// import { selectBoards } from "./boardsSlice";

// // interface ITable {
// //     tables: {
// //         id: string;
// //         title: string;
// //     }[];
// // };

// interface ITable {
//     selectBoards: any;
// }

// const initialState: ITable = {
//     selectBoards
// };

// const tablesSlice = createSlice({
//     name: 'tables',
//     initialState,
//     reducers: {
//         addTables(state, action) {
//             console.log(initialState)
//             state.tables.push({
//                 id: nanoid(),
//                 title: action.payload.name,
//             });
//         },
//     },
// });

// export const { addTables } = tablesSlice.actions;
// export default tablesSlice.reducer;