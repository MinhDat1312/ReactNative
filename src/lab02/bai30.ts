import { fetchData } from "./bai21";

export async function fetchMultipleUsers(): Promise<void> {
    const ids = [1, 2, 999];
    const results = await Promise.allSettled(ids.map(id => fetchData(id)));

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`User ${ids[index]} fetched:`, result.value);
        } else {
            console.error(`User ${ids[index]} failed:`, result.reason);
        }
    });
}