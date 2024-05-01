import API_URL from ".";

export type SkillsData = {
    id: number;
    name: string;
    description: string;
    skillLevel: number;
}


/**
 * Fetches skills data from the backend API.
 * 
 * @returns {Promise<{ data: SkillsData, status: number }>} The fetched skills data and HTTP status.
 * @throws {Error} If failed to fetch about data.
 */

export async function fetchSkillsData(): Promise<any> {
    try {
        const SkillsDataTransform = (many: boolean): Function => {
            const transform = (data: any): SkillsData => ({
                id: data?.id,
                name: data?.name,
                description: data?.description,
                skillLevel: data?.skill_level,
            });
            if (many) {
                return (dataset: any) => dataset?.map(transform);
            }
            return transform
        }
        const transform = SkillsDataTransform(true);
        const response = await fetch(`${API_URL}/skills/`, { method: "get" });
        if (!response.ok) {
            throw new Error('Failed to fetch skills data');
        }
        const data: SkillsData = await response.json();
        return {
            data: transform(data), status: response?.status
        }

    } catch (error) {
        console.error('Error fetching about data:', error);
        throw error;
    }
}