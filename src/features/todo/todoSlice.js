import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: Math.random(),
        title: "Learn JS",
        completed: false
    },
    {
        id: Math.random(),
        title: "Learn CSS",
        completed: false
    },
    {
        id: Math.random(),
        title: "Learn React",
        completed: false
    }
]

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers:{
    onAdd: (state, action) => {
        state.push({id: Math.random(),title: action.payload,completed: false})},
    onDelete: (state, action) => state.filter((todo) => todo.id !== action.payload),
    onChange: (state, action) => state.map((todo) => {
        if(action.payload.id === todo.id){
            return action.payload
        }
        return todo
    }),
    cleare: (state) => state.filter((todo) => !todo.completed)
    },
    extraReducers:{

    }

})

export const {onAdd, onDelete, onChange, cleare} = todoSlice.actions

export const selectTodo = (state) => state.todo

export default todoSlice.reducer