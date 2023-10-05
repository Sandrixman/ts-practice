import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id: number;
    taskText: string;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.push({ id: Date.now(), taskText: action.payload });

        },
        deleteTask: (state, action: PayloadAction<number>) => {
            return state.filter((currentTask) => currentTask.id !== action.payload);
         }
    }
})

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
