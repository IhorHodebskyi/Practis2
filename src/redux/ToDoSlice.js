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
        return { payload: { id, text } };
      },
    },
    deleteToDo: (state, { payload: id }) => {
      state.items = state.items.filter(todo => todo.id !== id);
    },
  },
});

export const { addTodo, deleteToDo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
export const selectToDos = state => state.items;
