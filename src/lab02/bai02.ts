export function getNumber (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("===Bài 02===")
            resolve(10)
        }, 1000)
    })
}