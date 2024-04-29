import { fetchSkillsData } from "@/pages/api/skills";
import * as SkillsSlice from "@/state/slices/SkillsSlice";
import { AppDisPatch } from "@/state/store";

export const loadSkills = (): any => async (dispatch: AppDisPatch) => {
    const response = await fetchSkillsData();

    dispatch(SkillsSlice.loadSkills(response?.data));
}