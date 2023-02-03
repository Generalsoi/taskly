import React, { useState } from "react";
import { Todo } from "./components/Todo";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");

  console.log(task);

  return (
    <div className="">
      <span className="text-center p-10">
        <h1 className="font-unbounded text-2xl md:text-4xl font-bold">
          Taskly
        </h1>
      </span>
      <Todo task={task} setTask={setTask} />
    </div>
  );
};

export default App;
