import http from 'axios';

export async function getPublicTasks() {
    const response = await http.get('tasks/allowanonymous');
    //const response = await (await fetch('https://wave-api.azurewebsites.net/api/tasks/allowanonymous')).json();

    console.log(response);

    return [];
}