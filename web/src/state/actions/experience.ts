import { fetchExperienceData } from '@/pages/api/experience';
import * as ExperienceSlice from "@/state/slices/ExperienceSlice";
import { AppDisPatch } from "@/state/store";

export const loadExperience = (): any =>
    async (dispatch: AppDisPatch) => {
        const response = await fetchExperienceData();

        dispatch(ExperienceSlice.loadExperience(response?.data));
    };