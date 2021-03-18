import http from 'axios';

export async function getPublicTasks({ page, pageSize, containsTitle }) {
    const response = await http.get('tasks', {
        params: { page, perPage: pageSize, containsTitle }
    });

    if (response.status === 200) return response.data;

    throw response;
}