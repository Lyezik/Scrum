import { configureStore } from "@reduxjs/toolkit";
// import tablesReducer from "./tablesSlice";
import userReducer from "./userSlice";
// import boardsReducer from "./boardsSlice";
import { boardsApi } from "./boardsSlice";

const store = configureStore({
    reducer: {
        // tables: tablesReducer,
        user: userReducer,
        [boardsApi.reducerPath]: boardsApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(boardsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;