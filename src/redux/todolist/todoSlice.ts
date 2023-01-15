import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// todo type
interface Todo {
    id: number,
    text: string,
    done: boolean
};

// initial state 
const initialState = [] as Todo[];

// slice
export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<string>) => { 
            const id = Math.max(0, ...state.map(todo => todo.id)) + 1;
            const todo: Todo = {
                id,
                text: action.payload,
                done: false
            };

            state.push(todo);
        },
        remove: (state, action: PayloadAction<number>) => {
            state = state.filter(todo => todo.id !== action.payload);
        },
        toggle: (state, action: PayloadAction<number>) => {
            state = state.map(todo => 
                todo.id === action.payload ? 
                {...todo, done: !todo.done} : todo
            );
        }
    }
})

// export actions, reducers, state
export const { create, remove, toggle } = todoSlice.actions;
export default todoSlice.reducer;