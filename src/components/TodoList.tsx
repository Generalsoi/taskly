import React, { FC } from "react";
import { Todo } from "./model";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="md:flex flex-wrap items-center justify-center gap-10 md:p-10">
      {todos.map((todo) => (
        <li className="w-full md:w-[30%] h-16 border-none rounded-lg bg-[#7B8FA1] text-white list-none flex items-center justify-between p-4">
          {todo.todo}
          <span className="flex items-center gap-3">
            <BiEdit className="cursor-pointer" />
            <AiOutlineDelete className="cursor-pointer" />
            <IoCheckmarkDoneCircle className="cursor-pointer" />
          </span>
        </li>
      ))}
    </div>
  );
};
