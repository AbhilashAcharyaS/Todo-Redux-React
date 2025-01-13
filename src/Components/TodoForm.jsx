import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

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

  return (
    <form onSubmit={addTodoHandler} className="space-y-4 sm:space-y-0 sm:space-x-3 mt-8 mx-auto flex flex-col sm:flex-row">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
