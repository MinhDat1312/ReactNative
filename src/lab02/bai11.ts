export const helloAsync = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            console.log("===Bài 11===");
            resolve("Hello Async\n");
        }, 2000);
    });
};