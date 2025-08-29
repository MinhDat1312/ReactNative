import { fetchData } from "./bai21";

export async function fetchDataUsers(ids: number[]) {
    const promises = ids.map(id => fetchData(id));
    return Promise.all(promises);
}