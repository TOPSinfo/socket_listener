import { configureStore } from "@reduxjs/toolkit";
import  websocketReducer from "./features/websocketSlice"
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    websocket: websocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
