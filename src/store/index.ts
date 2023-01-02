import {configureStore} from "@reduxjs/toolkit";
import {applicationStatusReducer} from "./ApplicationStatusSlice/ApplicationStatusSlice";

const store = configureStore({
    reducer: {
        applicationState: applicationStatusReducer
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;