import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../store/todoSlice";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length < 1) alert("Enter something!");
    else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const updateTodoHandler=(e)=>{
    e.preventDefault();
    dispatch(updateTodo({id:idOfEditTodo,todoMsg:editText}));
    setEditText("");
    setEnableEdit(false);
    alert("Updated!")
  }

  const todos=useSelector(store=>store.todos);

  const [enableEdit,setEnableEdit]=useState(false);
  const [editText, setEditText]=useState("");
  const [idOfEditTodo,setIdOfEditTodo]=useState(1)

  if(!todos || todos.length==0 ) return;

  const getEditTodo=()=>{
    const allEditTodos=todos.filter((one)=>(one.edit===true));
    // console.log(allEditTodos);
    if(allEditTodos.length>0) {
      setEnableEdit(true);
      setEditText(allEditTodos[0].todoMsg);
      setIdOfEditTodo(allEditTodos[0].id)
      console.log(editText);
      
    }

    // return allEditTodos[0];
  }

  useEffect(()=>{
    getEditTodo();
  },[todos])

  return (
    <form onSubmit={enableEdit? updateTodoHandler : addTodoHandler} className="space-y-4 sm:space-y-0 sm:space-x-3 mt-8 mx-auto flex flex-col sm:flex-row">
    
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        placeholder="Enter a Todo..."
        value={enableEdit ? editText :input}
        onChange={(e) => enableEdit ? setEditText(e.target.value) : setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {enableEdit ? "Update Todo":"Add Todo"}
      </button>
    </form>
  );
}

export default TodoForm;
