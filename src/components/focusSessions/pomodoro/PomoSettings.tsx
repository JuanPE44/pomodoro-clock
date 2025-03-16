import Icon from "../../../icons/Icon";

export function PomoSettings({
  time,
  withPause,
  modifyTime,
  startTimer,
  handlePauseChange,
}: {
  time: number;
  withPause: boolean;
  modifyTime: (operator: string) => void;
  startTimer: () => void;
  handlePauseChange: () => void;
}) {
  return (
    <>
      <div className="relative flex h-full flex-col items-center justify-between overflow-hidden">
        <div className="m-5 flex h-[30%] w-[90%] flex-col items-center justify-center">
          <h1 className="mb-2 flex h-1/2 items-center text-xl font-bold text-white">
            Preparate Para concentrarte
          </h1>
          <p className="h-1/2 text-center text-sm text-neutral-200">
            We'll turn off notifications and app alerts during each session. For
            longer sessions, we'll add a short break so you can recharge.
          </p>
        </div>

        <div className="bg-pomodoro m-5 flex flex-row items-center justify-center overflow-hidden rounded-sm border-b border-white shadow-sm hover:rounded-md hover:brightness-125">
          <div className="flex h-full flex-col items-center justify-center gap-1 p-8 text-center text-white hover:bg-[#5c5c5c] hover:opacity-40">
            <span className="text-4xl">{time}</span>
            <span className="text-xs text-neutral-200">mins</span>
          </div>
          <div className="flex h-full flex-col items-center justify-center">
            <button
              onClick={() => modifyTime("+")}
              className="flex h-1/2 w-full items-center justify-center border-b border-l border-[#5c5c5c] p-3 text-white hover:bg-[#5c5c5c] hover:opacity-40"
            >
              <Icon name="arrowUp" />
            </button>
            <button
              onClick={() => modifyTime("-")}
              className="flex h-1/2 w-full items-center justify-center border-l border-[#5c5c5c] p-3 text-white hover:bg-[#5c5c5c] hover:opacity-40"
            >
              <Icon name="arrowDown" />
            </button>
          </div>
        </div>
        <label className="flex justify-center items-center">
        <input
          type="checkbox"
          checked={withPause}
          onChange={handlePauseChange}
          className="custom-checkbox mr-2"
        />
        Marcar esta casilla
      </label>
        <div className="flex w-full items-center justify-center p-10">
          <button
            onClick={startTimer}
            className="bg-primary cursor-pointer rounded-sm px-3 py-2 text-sm text-black hover:opacity-60"
          >
            ▶ Start focus session
          </button>
        </div>
      </div>
    </>
  );
}
