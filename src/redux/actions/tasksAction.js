import { TASKS_ADDED_ACTIN } from "./actionTypes";

export function tasksAdded(task) {
    return { type: TASKS_ADDED_ACTIN, task };
}