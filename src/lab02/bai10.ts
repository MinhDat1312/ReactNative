export function promiseFinally(success: boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("===Bài 10===")
            if (success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 1000);
    });
}