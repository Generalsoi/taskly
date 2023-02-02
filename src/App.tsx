import React from "react";
import { Todo } from "./components/Todo";

const App: React.FC = () => {
  return (
    <div className="">
      <span className="text-center p-10">
        <h1 className="font-unbounded text-2xl md:text-4xl font-bold">
          Taskly
        </h1>
      </span>
      <Todo />
    </div>
  );
};

export default App;
