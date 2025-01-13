import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:"todo",
    initialState:[{id:1, todoMsg:"Write your todo!", completed:false}],
    reducers:{
        addTodo:(state,action)=>{
            state = state.push({id:nanoid(),todoMsg:action.payload,completed:false});
        },
        removeTodo:(state,action)=>{
           return state.filter((one)=> (one.id !== action.payload))
        },
        // updateTodo:(state,action)=>{
        //     state= state.map((one)=>(one.id === action.payload ? [{...one,todoMsg:action.payload}] : one))
        // },
        toggleComplete:(state,action)=>{
            state = state.map((one)=>(one.id === action.payload ? one.completed = !one.completed :one ));
        }
    }
});

export const {addTodo,removeTodo,updateTodo,toggleComplete}=todoSlice.actions;

export default todoSlice.reducer;