export type ExperienceData = {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

/**
 * Fetches experience data from the backend API.
 * 
 * @returns {Promise<{ data: ExperienceData, status: number }>} The fetched experience data and HTTP status.
 * @throws {Error} If failed to fetch experience data.
 */

export async function fetchExperienceData(): Promise<any> {
    try {
        const ExperienceDataTransform = (many: boolean): Function => {
            const transform = (data: any): ExperienceData => ({
                id: data?.id,
                title: data?.title,
                company: data?.company,
                location: data?.location,
                startDate: data?.start_date,
                endDate: data?.end_date,
                description: data?.description,
            });
            if (many) {
                return (dataset: any) => dataset?.map(transform);
            }
            return transform
        }
        const transform = ExperienceDataTransform(true);
        const response = await fetch(`/api/experience/`, { method: "get" });

        if (!response.ok) {
            throw new Error('Failed to fetch experience data');
        }
        const data: ExperienceData = await response.json();
        return {
            data: transform(data), status: response?.status
        }

    } catch (error) {
        console.error('Error fetching experience data:', error);
        throw error;
    }
}