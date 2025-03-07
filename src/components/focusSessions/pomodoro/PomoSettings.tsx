import { IconArrowDown } from "../../../icons/IconArrowDown";
import { IconArrowUp } from "../../../icons/IconArrowUp";



export function PomoSettings({
  time,
  modifyTime,
  startTimer,
}: {
  time: number;
  modifyTime: (operator: string) => void;
  startTimer: () => void;
}) {

  ; 

  return (
    <>
      <div className="h-full flex flex-col justify-between items-center relative overflow-hidden">
        <div className="w-[90%] h-[30%] flex flex-col justify-center items-center m-5">
          <h1 className="h-1/2 text-xl text-white font-bold flex items-center mb-2">
            Preparate Para concentrarte
          </h1>
          <p className="h-1/2 text-center text-sm text-neutral-200">
            We'll turn off notifications and app alerts during each session. For
            longer sessions, we'll add a short break so you can recharge.
          </p>
        </div>

        <div className="w-[50%] h-[22%] m-5 bg-neutral-800 flex flex-row justify-center items-center shadow-sm rounded-sm border-b border-white hover:brightness-125 hover:rounded-md overflow-hidden">
          <div className="w-[70%] h-full flex text-white items-center justify-center flex-col hover:bg-[#5c5c5c] hover:opacity-40">
            <div className="text-xl">{time}</div>
            <div className="text-xs">min</div>
          </div>
          <div className="w-[30%] h-full flex flex-col items-center justify-center">
            <button
              onClick={() => modifyTime("+")}
              className="w-full h-1/2 text-white border-l border-b border-[#5c5c5c] hover:bg-[#5c5c5c] hover:opacity-40 flex items-center justify-center"
            >
              <IconArrowUp />
            </button>
            <button
              onClick={() => modifyTime("-")}
              className="w-full h-1/2 text-white border-l border-[#5c5c5c] hover:bg-[#5c5c5c] hover:opacity-40 flex items-center justify-center"
            >
              <IconArrowDown />
            </button>
          </div>
        </div>
        <div className="w-full p-10 flex justify-center items-center">
          <button
            onClick={startTimer}
            className=" cursor-pointer bg-primary text-black text-sm rounded-sm py-2 px-3 hover:opacity-60"
          >
            ▶ Start focus session
          </button>
        </div>
      </div>
    </>
  );
}
