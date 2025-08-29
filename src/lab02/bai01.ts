export const helloPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("===Bài 01===")
        resolve("Hello Async\n")
    }, 2000)
})