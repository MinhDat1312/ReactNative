export type User = {
    id: number;
    name: string;
};

export async function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, 1000);
    });
}