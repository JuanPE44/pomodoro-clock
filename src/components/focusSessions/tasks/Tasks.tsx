import { useState } from "react";
import { IconPlus } from "../../../icons/IconPlus";
import { IconTasks } from "../../../icons/IconTasks";
import { Card } from "../../ui/Card";
import DropdownMenu from "../../ui/DropdownMenu";

interface TypeTask {
  id: number;
  title: string;
  completed: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.target[0].value;
    addTask({ id: Date.now(), title, completed: false });
  };

  const handleOnChange = (e) => {
    const taskId = parseInt(e.target.value);
    console.log(taskId);
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addTask = ({ id, title, completed }: TypeTask) => {
    setTasks([{ id, title, completed }, ...tasks]);
    setIsFocus(false);
  };

  return (
    <Card className="min-h-60">
      <header className="flex justify-between w-full items-center">
        <div className="flex items-center gap-0.5">
          <IconTasks color="var(--color-task)" />
          <span className="font-semibold">Tasks</span>
        </div>
        <div className="flex gap-1 items-center">
          <div
            className="hover:bg-neutral-700 rounded-sm p-1 cursor-pointer"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
          </div>
          <DropdownMenu>
            <li className="hover:bg-[#18181844] rounded-sm px-2 ">Opciones</li>
          </DropdownMenu>
        </div>
      </header>
      {tasks.length === 0 && !isFocus ? (
        <div className="p-8 text-center flex flex-col items-center gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Stay on track</h3>
            <p className="text-sm text-neutral-200">
              Add tasks and assign then to focus sessions throughout your day
            </p>
          </div>
          <button
            className="flex gap-1 items-center px-3 py-1 bg-neutral-700 rounded-sm curson-pointer"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
            <span>Add task</span>
          </button>
        </div>
      ) : (
        <div className="py-2 flex flex-col gap-2">
          <p className="text-xs text-neutral-400">
            Select a task for your focus session
          </p>
          {isFocus && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Add task"
                className="w-full bg-neutral-700 px-2 py-1 border-b-task   border-b rounded-md"
              />
            </form>
          )}
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="flex items-center w-full bg-neutral-700 p-2 border border-neutral-600 rounded-md"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  value={task.id}
                  onChange={(e) => handleOnChange(e)}
                  className="w-4 h-4 rounded-full  text-task outline-none p "
                />
                <label
                  className={`ms-2 text-sm font-medium text-neutral-100 ${
                    task.completed && "line-through text-neutral-400"
                  }`}
                >
                  {task.title}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
