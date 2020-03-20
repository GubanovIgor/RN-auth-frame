import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk))