export function filterEvenNumbers(arr: number[]) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter((num) => num % 2 === 0);
            console.log("===Bài 09===")
            resolve(evens);
        }, 1000);
    });
}