import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:"todo",
    initialState:[{id:1, todoMsg:"Write your todo!", completed:false,edit:false}],
    reducers:{
        addTodo:(state,action)=>{
            state = state.push({id:nanoid(),todoMsg:action.payload,completed:false,edit:false});
        },
        removeTodo:(state,action)=>{
           return state.filter((one)=> (one.id !== action.payload))
        },
        updateTodo:(state,action)=>{
            return state.map((one)=>(one.id === action.payload.id ? {...one,todoMsg:action.payload.todoMsg, edit:false } : one))
        },
        toggleComplete:(state,action)=>{
            state = state.map((one)=>(one.id === action.payload ? one.completed = !one.completed :one ));
        },
        toggleEdit:(state,action)=>{
            state = state.map((one)=>(one.id === action.payload ? one.edit = true :one ));
        },
    }
});

export const {addTodo,removeTodo,updateTodo,toggleComplete,toggleEdit}=todoSlice.actions;

export default todoSlice.reducer;