import React, { useState } from "react";
import { Todos } from "./components/Todos";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTask = () => {
    setTodos([...todos, task]);
  };

  // console.log(task);

  return (
    <div className="">
      <span className="text-center p-10">
        <h1 className="font-unbounded text-2xl md:text-4xl font-bold">
          Taskly
        </h1>
      </span>
      <Todos
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        todos={todos}
      />
    </div>
  );
};

export default App;
