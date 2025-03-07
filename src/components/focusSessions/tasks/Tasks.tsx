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
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-0.5">
          <IconTasks color="var(--color-task)" />
          <span className="font-semibold">Tasks</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer rounded-sm p-1 hover:bg-neutral-700"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
          </div>
          <DropdownMenu>
            <li className="rounded-sm px-2 hover:bg-[#18181844]">Opciones</li>
          </DropdownMenu>
        </div>
      </header>
      {tasks.length === 0 && !isFocus ? (
        <div className="flex flex-col items-center gap-5 p-8 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Stay on track</h3>
            <p className="text-sm text-neutral-200">
              Add tasks and assign then to focus sessions throughout your day
            </p>
          </div>
          <button
            className="curson-pointer flex items-center gap-1 rounded-sm bg-neutral-700 px-3 py-1"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
            <span>Add task</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 py-2">
          <p className="text-xs text-neutral-400">
            Select a task for your focus session
          </p>
          {isFocus && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Add task"
                autoFocus={isFocus}
                className="border-b-task w-full rounded-md border-b bg-neutral-800 px-2 py-1 outline-none"
              />
            </form>
          )}
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="flex w-full items-center rounded-md border border-neutral-600 bg-neutral-700 p-2"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  value={task.id}
                  onChange={(e) => handleOnChange(e)}
                  className="text-task p h-4 w-4 rounded-full outline-none"
                />
                <label
                  className={`ms-2 text-sm font-medium text-neutral-100 ${
                    task.completed && "text-neutral-400 line-through"
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
