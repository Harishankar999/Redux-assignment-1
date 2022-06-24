import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  UPDATE_TODO,
} from "../Todo/todoAction.types";
import axios from "axios";

// Todo app

export const getTodos = (dispatch) => {
  dispatch({ type: GET_TODO_LOADING });
  return axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_TODO_ERROR });
    });
};
export const todoAdd = (dispatch, payload) => {
  dispatch({ type: ADD_TODO_LOADING });
  axios
    .post("http://localhost:8080/todos", payload)
    .then((res) => {
      dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODO_ERROR });
    });
};
export const todoComplete = (id) => ({ type: COMPLETE_TODO, payload: id });

export const todoUpdate = (payload) => ({ type: UPDATE_TODO, payload });

// export const todoRemove = (id) => {
//   dispatch({ type: DELETE_TODO, payload: id });
// };
