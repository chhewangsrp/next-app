import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Experience = {
    id: number;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
};

const initialState: Experience = {
    id: 0,
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
}

export const ExperienceSlice = createSlice({
    name: "Experience",
    initialState,
    reducers: {
        loadExperience: (
            _,
            action: PayloadAction<Experience>
        ) => {
            const { payload } = action;
            return {
                ...payload
            };
        },
    }
});

export const { loadExperience } = ExperienceSlice.actions;
export default ExperienceSlice.reducer;