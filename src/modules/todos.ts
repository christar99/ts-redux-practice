import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type todo = {
    id: number,
    text: string,
    done: boolean
}

type TodoState = {
    todoList: todo[];
}

const initialState: TodoState = {
    todoList: []
};

export const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string> ) {
            const nextId = state.todoList.length === 0
                ? 0 : Math.max(...state.todoList.map((todo) => todo.id)) + 1;
            state.todoList.push({ id: nextId, text: action.payload, done: false });
        },
        checkTodo(state, action: PayloadAction<number>) {
            state.todoList = state.todoList.map((todo) => {
                return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
            })
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, checkTodo, removeTodo } = todos.actions;

export default todos;