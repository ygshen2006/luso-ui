import { FC, memo, useEffect } from "react";
import { Task } from "./Types";
import TaskComponent from "./TaskComponent";
type Props = {
  tasks: Task[];
  handleDelete: any
};
const TaskList: FC<Props> = ({ tasks, handleDelete }: Props) => {
  useEffect(() => {
    console.log("Task list refresh");
  });
  return (
    <>
      <ul>
        {tasks.map((_, index) => (
          <li key={index}>
            <TaskComponent task={_} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(TaskList);
