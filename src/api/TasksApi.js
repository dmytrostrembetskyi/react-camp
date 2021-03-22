import http from 'axios';

export async function getPublicTasks({ page, pageSize, containsTitle }) {
    const response = await http.get('tasks/allowanonymous', {
        params: { page, perPage: pageSize, containsTitle }
    });

    if (response.status === 200) return response.data;

    throw response;
}

export async function getTask(id) {
    const response = await http.get(`tasks/${id}`);

    if (response.status >= 200 && response.status < 300) return response.data;

    throw response;
}

export async function createTask({ name, description, type }) {
    const response = await http.post('tasks', { title: name, description, type });

    if (response.status >= 200 && response.status < 300) return response.data;

    throw response;
}

export async function updateTask({ id, name, description, type, status }) {
    const response = await http.put('tasks', { id, title: name, description, type, status });

    if (response.status >= 200 && response.status < 300) return response.data;

    throw response;
}

export async function deleteTask(id) {
    const response = await http.delete(`tasks/${id}`);

    if (response.status >= 200 && response.status < 300) return response.data;

    throw response;
}