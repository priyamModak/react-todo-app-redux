import { createStore, combineReducers } from "redux";
import todos from "./reducer/todo";

// Responsible for combining all the present reducers
const rootReducer = combineReducers({
    todos
});

const store = createStore(rootReducer);

export default store;