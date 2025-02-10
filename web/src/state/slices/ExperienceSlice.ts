import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Experience = {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
};

const initialState: Experience = {
    id: 0,
    title: "",
    company: "",
    location: "",
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