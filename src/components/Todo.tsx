import React, { FC } from "react";

export const Todo: FC = () => {
  return (
    <div>
      <form className="md:flex items-center gap-6 justify-center mt-10 font-kanit">
        <input
          type="text"
          placeholder="Enter task"
          className="md:w-[50%] h-10 p-2 border-none rounded-xl focus:border-none"
        />
        <button
          type="submit"
          className="px-10 py-3 border border-1 rounded-xl hover:bg-[#fff] hover:text-black"
        >
          Add
        </button>
      </form>
    </div>
  );
};
