import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";

export const store = configureStore({
    reducer: {
        auth: authreducer
    }
});

export type RootState = ReturnType<typeof store.getState>