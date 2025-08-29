export async function fetchTodosNotCompleted() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todos = await response.json();
    const listNotCompleted = todos.filter((todo: { completed: any; }) => !todo.completed)
    return listNotCompleted;
}