import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type About = {
    id: number;
    bio: string;
    describeMe: string[];
}

const initialState: About = {
    id: 0,
    bio: "",
    describeMe: [],
};

export const AboutSlice = createSlice({
    name: "About",
    initialState,
    reducers: {
        loadAbout: (
            _,
            action: PayloadAction<About>
        ) => {
            const { payload } = action;
            return {
                ...payload
            };
        },
    },
});

export const { loadAbout } = AboutSlice.actions;
export default AboutSlice.reducer;
