import { createSlice } from '@reduxjs/toolkit'

let nextid = 0;
const todoSlice = createSlice(
    {
        name: 'todos',
        initialState: [],
        reducers: {
            addTodoList: {
                reducer(state, action) {
                    const { id, text } = action.payload;
                    console.log(action.payload);
                    state.push({ id, text, completed: false })
                  },
                  prepare(text) {
                    return { payload: { text, id: nextid++ } }
                  }
            },
            updateTodoList: (state, actions) => {
                console.log(actions)
                const todo = state.find(todo => todo.id === actions.payload)
                console.log(todo);
                if (todo) {
                    todo.completed = !todo.completed
                }
            }
        }
    }
)

export const { addTodoList, updateTodoList } = todoSlice.actions;
export default todoSlice.reducer;