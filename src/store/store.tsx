import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "./tablesSlice";
import userReducer from "./userSlice";
import boardsReducer from "./boardsSlice";

const store = configureStore({
    reducer: {
        tables: tablesReducer,
        user: userReducer,
        boards: boardsReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;