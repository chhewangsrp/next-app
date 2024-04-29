import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type About = {
    id: number;
    bio: string;
    descrineMe: string[];
}

const initialState: About = {
    id: 0,
    bio: "",
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
