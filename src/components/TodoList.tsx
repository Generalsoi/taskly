import React, { FC, useState } from "react";
import { Todo } from "./model";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: FC<Props> = ({ todos, setTodos }) => {
  //
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="md:flex flex-wrap items-center justify-center gap-10 p-6 md:p-10">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`w-full md:w-[30%] h-16 border-none rounded-lg ${
            todo.isDone ? "bg-[#CFB997]" : "bg-[#7B8FA1]"
          } text-white list-none p-4 mt-6 md:mt-0`}
        >
          <form className=" flex items-center justify-between">
            {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
            <div className="flex items-center gap-3">
              <AiOutlineDelete
                className="cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              />
              <IoCheckmarkDoneCircle
                className="cursor-pointer"
                onClick={() => handleDone(todo.id)}
              />
            </div>
          </form>
        </li>
      ))}
    </div>
  );
};
