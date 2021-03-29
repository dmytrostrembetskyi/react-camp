import { TASKS_ADDED_ACTIN } from "../actions/actionTypes";

export default function tasksReducer(state = [], action) {
    switch (action.type) {
        case TASKS_ADDED_ACTIN:
            return [...state, action.task];
        default:
            return state;
    }
}