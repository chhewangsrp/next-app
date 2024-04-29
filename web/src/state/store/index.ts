import { configureStore } from "@reduxjs/toolkit";

import AboutReducer from "@/state/slices/AboutSlice";
import ExperienceReducer from "@/state/slices/ExperienceSlice";
import SkillsReducer from "@/state/slices/SkillsSlice";

const store = configureStore({
    reducer: {
        about: AboutReducer,
        experience: ExperienceReducer,
        skills: SkillsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;