import { fetchUser, User } from "./bai18";

export async function fetchUsers(ids: number[]): Promise<User[]> {
    const promises = ids.map(id => fetchUser(id));
    return Promise.all(promises);
}