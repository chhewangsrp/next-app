import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Skills = {
    id: number;
    name: string;
    description: string;
    skillLevel: number;
}

const initialState: Skills = {
    id: 0,
    name: "",
    description: "",
    skillLevel: 0,
}

export const SkillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        loadSkills: (_, action: PayloadAction<Skills>) => {
            const { payload } = action;
            return {
                ...payload
            }
        }
    }
})

export const { loadSkills } = SkillsSlice.actions;
export default SkillsSlice.reducer;