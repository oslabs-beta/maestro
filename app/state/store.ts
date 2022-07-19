import { configureStore } from "@reduxjs/toolkit";
import namespaceReducer from "../Components/namespace/namespaceSlice";

const store = configureStore({
   reducer: {
       namespace: namespaceReducer,
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;