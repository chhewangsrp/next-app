import { configureStore } from "@reduxjs/toolkit";

import AboutReducer from "@/state/slices/AboutSlice";
import ExperienceReducer from "@/state/slices/ExperienceSlice";

const store = configureStore({
    reducer: {
        about: AboutReducer,
        experience: ExperienceReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;