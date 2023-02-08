import React, { FC } from "react";
import { Todo } from "./model";

interface Props {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: (e: React.FormEvent) => void;
}

export const Todos: FC<Props> = ({ task, setTask, handleAddTask }) => {
  return (
    <div>
      <form
        className="flex flex-col md:flex-row items-center gap-6 p-6 justify-center mt-10 font-kanit"
        onSubmit={(e) => {
          handleAddTask(e);
        }}
      >
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          className="w-full md:w-[50%] h-10 p-2 border-none rounded-xl focus:border-none text-black"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="px-10 py-3 mt-4 md:mt-0 border border-1 rounded-xl hover:bg-[#fff] hover:text-black"
        >
          Add
        </button>
      </form>
    </div>
  );
};
