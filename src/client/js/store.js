import { createStore, combineReducers } from "redux";
import quoteReducer from "./reducer";

export default createStore(combineReducers({ quotes: quoteReducer }));
