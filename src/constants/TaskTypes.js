export const taskTypes = [
    {
        value: 'task',
        label: 'Default task'
    },
    {
        value: 'small-task',
        label: 'Small task'
    },
    {
        value: 'medium-task',
        label: 'Medium task'
    },
    {
        value: 'big-task',
        label: 'Big task'
    }
];

export function getTaskTypeLabel(value) {
    return taskTypes.find(task => task.value === value)?.label ?? '';
}