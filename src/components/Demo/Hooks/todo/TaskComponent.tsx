import { FC, memo, useEffect } from "react";
import { Task } from "./Types";
type Props = {
  task: Task;
  handleDelete: any;
};
const TaskComponent: FC<Props> = ({
  task: { name, done },
  handleDelete,
}: Props) => {
  useEffect(() => {
    console.log("task refresh");
  });
  return (
    <>
      <div className={done ? "task-done" : ""}>{name}</div>
      <button onClick={() => handleDelete(name)}>Delete</button>
    </>
  );
};

export default memo(TaskComponent);
