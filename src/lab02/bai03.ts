export function throwError(){
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            console.log("===Bài 03===")
            reject(new Error("Something went wrong\n"))
        }, 1000)
    })
}