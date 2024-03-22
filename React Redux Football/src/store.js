import { combineReducers } from "redux";
import { createStore } from "redux";
import { fetchReducer, mainReducer, pageReducer } from "./reducer";

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
};

let reducer = combineReducers({
  main: mainReducer,
  fetch: fetchReducer,
  page : pageReducer
});

export let store = createStore(reducer);
