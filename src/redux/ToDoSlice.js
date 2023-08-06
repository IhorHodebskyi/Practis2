import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { items: [] };

const ToDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: text => {
        const id = nanoid();
        return { payload: { id, text, likes: 0 } };
      },
    },
    deleteToDo: (state, { payload: id }) => {
      state.items = state.items.filter(todo => todo.id !== id);
    },
    incrementLike: (state, { payload: id }) => {
      state.items = state.items.map(todo => {
        if (todo.id === id) {
          return { ...todo, likes: todo.likes + 1 };
        } else {
          return todo;
        }
      });
    },

    decrementLike: (state, { payload: id }) => {
      state.items = state.items.map(todo => {
        if (todo.id === id) {
          if (todo.likes === 0) {
            return todo;
          } else {
            return { ...todo, likes: todo.likes - 1 };
          }
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteToDo, incrementLike, decrementLike } =
  ToDoSlice.actions;
export default ToDoSlice.reducer;
export const selectToDos = state => state.items;
