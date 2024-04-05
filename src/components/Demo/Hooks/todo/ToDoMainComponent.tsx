import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Task } from "./Types";
import TaskList from "./TaskListComponent";

const ToDoMainComponent = () => {
  useEffect(() => console.log("Main component...."));
  const initialTasks: Task[] = [
    { name: "Go to school", done: false },
    { name: "Birthday party", done: false },
  ];
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [task, setTask] = useState<string>();
  const [term, setTerm] = useState<string>();

  const changeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const submitTask = () => {
    setTerm("");
    setTasks([...tasks, { name: task, done: false }]);
    setTask("");
  };

  const searchTask = () => {
    setTerm(task);
  };

  const todolist = useMemo(() => {
    return tasks.filter((currentTask: Task) => {
      console.log("Filter running!");
      if (term) {
        return currentTask.name?.toLowerCase().includes(term!);
      }
      return true;
    });
  }, [term, tasks]);

  const handleDelete = useCallback(
    (name: string) => {
      setTasks(
        tasks.filter((v) => v.name?.toLowerCase() !== name.toLocaleLowerCase())
      );
    },
    [tasks]
  );

  return (
    <>
      <div>
        <input
          type="text"
          defaultValue={""}
          value={task}
          onChange={changeTask}
        />
        <button onClick={submitTask}>Save</button>
        <button onClick={searchTask}>Search</button>
      </div>
      <TaskList tasks={todolist} handleDelete={handleDelete} />
    </>
  );
};

export default ToDoMainComponent;
