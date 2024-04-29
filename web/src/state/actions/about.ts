import { fetchAboutData } from "@/pages/api/about";
import * as AboutSlice from "@/state/slices/AboutSlice";
import { AppDisPatch } from "@/state/store";

export const loadAbout = () =>
    async (dispatch: AppDisPatch) => {
        const response = await fetchAboutData();

        dispatch(AboutSlice.loadAbout(response?.data));
    };