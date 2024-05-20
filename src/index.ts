import fetch from 'node-fetch';

interface FetchAIOptions {
    apiKey: string;
    prompt: string;
}

export async function nevo({ apiKey, prompt }: FetchAIOptions): Promise<any> {
    const endpoint = `https://ai.nevolution.team/nevo?apikey=${encodeURIComponent(apiKey)}&prompt=${encodeURIComponent(prompt)}`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
