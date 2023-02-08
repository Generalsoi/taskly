import React, { useState, useEffect } from "react";
import { Todos } from "./components/Todos";
import { Todo } from "./components/model";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTodos([...todos, { id: Date.now(), todo: task, isDone: false }]);
      localStorage.setItem("todosList", JSON.stringify(todos));
      setTask("");
    }
  };

  // console.log(task);

  return (
    <div className="">
      <span className="text-center p-10">
        <h1 className="font-unbounded text-2xl md:text-4xl font-bold">
          Taskly
        </h1>
      </span>
      <Todos task={task} setTask={setTask} handleAddTask={handleAddTask} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
