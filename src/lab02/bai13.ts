export function simulateTask13(ms: number, shouldFail = false): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("===Bài 13===")
            if (shouldFail) {
                reject(new Error(`Task failed after ${ms}ms`));
            } else {
                resolve(`Task finished after ${ms}ms`);
            }
        }, ms);
    });
}