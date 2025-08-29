export function getRandomNumber() {
    return new Promise((resolve, reject) => {
    const num = Math.random();

    console.log("===Bài 04===")
    if (num >= 0) {
        resolve(num);
    } else {
        reject("Failed to generate number");
    }
    });
}