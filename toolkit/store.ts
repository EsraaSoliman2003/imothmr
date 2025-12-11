import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/openMenu";
import servicesReducer from "./slices/getServices";
import homeReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    services: servicesReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
