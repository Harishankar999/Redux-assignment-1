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

const initialState = {
  addTodos: {
    loading: false,
  },
  getTodos: {
    loading: false,
    error: false,
    data: [],
  },
};

export const todoReducer = (state = initialState, { type, payload }) => {
  // console.log(state.getTodos);
  // console.log(payload);

  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
        },
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          data: payload,
        },
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
        },
      };
    }
    case ADD_TODO_LOADING: {
      return {
        ...state,
        addTodos: {
          loading: true,
        },
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          data: [...state.getTodos.data, payload],
        },
        addTodos: {
          loading: false,
        },
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        addTodos: {
          loading: false,
        },
      };
    }
    case "REMOVE": {
      console.log(...state.getTodos.data);
      const newTodo = state.getTodos.data.filter(
        (data) => data.id !== payload.id
      );
      console.log(newTodo);
      return {
        ...state.getTodos,
        data: newTodo,
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        getTodos: {},
      };
    }
    case UPDATE_TODO: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
