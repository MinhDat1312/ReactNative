import { fetchData } from "./bai21";

export async function batchProcess(): Promise<void> {
    const tasks = [
        fetchData(1),
        fetchData(2),
        fetchData(3),
        fetchData(4),
        fetchData(5),
    ];
    const results = await Promise.all(tasks);

    console.log("===Bài 28===")
    results.forEach((result) => console.log(result));
    console.log("\n")
}