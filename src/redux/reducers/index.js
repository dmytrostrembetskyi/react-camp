import { combineReducers } from "redux";
import newTasks from '../reducers/tasksReducer';

const rootReducers = combineReducers({
    newTasks
});

export default rootReducers;