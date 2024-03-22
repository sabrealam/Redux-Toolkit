import  reducer from "./reducers/reducer";
import { createStore } from "redux";

const todo = [];


 
export let store = createStore(reducer, todo);
