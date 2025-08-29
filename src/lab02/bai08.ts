export const promiseChain = new Promise<number>((resolve) => {
    resolve(2);
})
    .then((num: number) => {
        const squared = num * num;
        return squared;
    })
    .then((num: number) => {
        const doubled = num * 2;
        return doubled;
    })
    .then((num: number) => {
        const final = num + 5;
        console.log("===Bài 08===")
        console.log(final, "\n")
        return final;
    })
    .catch((err: unknown) => console.error("Error:", err));