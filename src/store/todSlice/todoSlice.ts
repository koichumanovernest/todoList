import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { TodoStates } from ".";
import { Todo } from "./index.d";

const initialState: TodoStates = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<Draft<Todo>>) => {
			state.todos.push(payload);
		},
	},
});

export const { addTodo } = todoSlice.actions;