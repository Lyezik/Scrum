import { configureStore } from "@reduxjs/toolkit";
// import tablesReducer from "./tablesSlice";
import userReducer from "./userSlice";
// import boardsReducer from "./boardsSlice";
import { api } from "./boardsSlice";

const store = configureStore({
    reducer: {
        // tables: tablesReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;