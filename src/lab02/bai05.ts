export function simulateTask(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("===Bài 05===")
            resolve("Task done");
        }, time);
    });
}