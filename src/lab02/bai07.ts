import { simulateTask } from "./bai05";

export function promiseRace(){
    return Promise.race([
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ])
}