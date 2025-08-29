import { User } from "./bai18";

export async function fetchUserTimeout(id: number): Promise<User> {
    const apiCall = new Promise<User>((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, delay);
    });

    const timeout = new Promise<User>((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Request for user ${id} timed out after 2s`));
        }, 2000);
    });

    return Promise.race([apiCall, timeout]);
}
