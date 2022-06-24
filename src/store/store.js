import { legacy_createStore, combineReducers } from "redux";
import { counterReducer } from "../store/Counter/counter.reducer";
import { todoReducer } from "../store/Todo/todoApp.reduce";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/login.reducer";
const rootreducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  auth: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
