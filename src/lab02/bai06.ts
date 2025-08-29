import { simulateTask } from "./bai05";

export function promiseAll(){
    return Promise.all([
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ])
}