export async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);

            if (attempt === retries) {
                throw new Error(`All ${retries} attempts failed`);
            }

            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}