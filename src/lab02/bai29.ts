import { fetchData } from "./bai21";

export async function queueProcess(): Promise<void> {
    const tasks = [1, 2, 3];

    for (const id of tasks) {
        const result = await fetchData(id);
        console.log("===Bài 29===\n", result);
    }
    console.log("\n");
}