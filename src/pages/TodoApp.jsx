import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  removeTodo,
  todoAdd,
  todoComplete,
  todoRemove,
} from "../store/Todo/action";
import styles from "../app.module.css";
function TodoApp() {
  let [isCompleted, setIsCompleted] = useState();
  // console.log(isCompleted);
  let ref = useRef();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    data: todos,
  } = useSelector((state) => state.todo.getTodos);
  // console.log(todos);
  const { loading: addButtonLoading } = useSelector(
    (state) => state.todo.addTodos
  );

  const addNewTodo = () => {
    let value = ref.current.value;

    todoAdd(dispatch, {
      value: value,
      isCompleted: false,
    });

    ref.current.value = null;
  };

  useEffect(() => {
    getTodos(dispatch);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h1>Something Went Wrong...</h1>;
  return (
    <div>
      {/* TodoApp */}
      <div className={styles.todo}>
        <input
          className={styles.input}
          ref={ref}
          type="text"
          placeholder="type here..."
        />
        <button
          className={styles.addbtn}
          onClick={addNewTodo}
          disabled={addButtonLoading}
        >
          +
        </button>
      </div>
      <br />
      <br />
      {todos.map((todo) => (
        <div className={styles.tododata} key={todo.id}>
          <input
            type="checkbox"
            onChange={(e) => {
              setIsCompleted(e.target.checked);
            }}
          />
          <h3 className={isCompleted ? styles.line : ""}>{todo.value}</h3>
          <button onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
