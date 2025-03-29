import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleComplete, toggleEdit } from "../store/todoSlice";
import TodoForm from "./TodoForm";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // if (!todos || todos.length === 0) return (<> <TodoForm/> <h1 className="text-center">No items to show!</h1></>);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleCompleted = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (id) => {
    dispatch(toggleEdit(id));
    window.scrollTo({top:0, behavior:"smooth"})
  };

  return (
    <div className="mt-12 border-2 py-4 bg-slate-900 w-11/12 sm:w-5/6 mx-auto rounded-3xl">
      <h1 className="text-3xl text-center font-extrabold">Your Todos</h1>

      {!todos && <div> <TodoForm/> <h1 className="text-center">No items to show!</h1> </div>}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <div
              className={`text-white px-4  ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.todoMsg}
            </div>

            <div className="flex flex-col sm:flex-row">
              <button disabled={todo.completed}
                className="px-3 py-1  mx-2 text-center rounded-md bg-gray-600 mb-1 sm:mb-0"
                onClick={() => handleEdit(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1  mx-2 text-center rounded-md bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
