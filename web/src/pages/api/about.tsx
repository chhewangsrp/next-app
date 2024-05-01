export type AboutData = {
    id: number;
    bio: string;
    describeMe: string[];
}

/**
 * Fetches about data from the backend API.
 * 
 * @returns {Promise<{ data: AboutData, status: number }>} The fetched about data and HTTP status.
 * @throws {Error} If failed to fetch about data.
 */

export async function fetchAboutData(): Promise<any> {
    try {
        const transform = (data: any): AboutData => ({
            id: data?.id,
            bio: data?.bio,
            describeMe: data?.describe_me,
        });
        const response = await fetch('https://chhewang-sherpa.azurewebsites.net/about', { method: "get" });
        if (!response.ok) {
            throw new Error('Failed to fetch about data');
        }
        const data: AboutData = await response.json();
        return {
            data: transform(data), status: response?.status
        }

    } catch (error) {
        console.error('Error fetching about data:', error);
        throw error;
    }
}