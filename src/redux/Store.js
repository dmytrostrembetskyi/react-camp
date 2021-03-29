import { createStore } from "redux";
import rootReducers from "./reducers";

export function configureStore() {
    return createStore(rootReducers);    
}