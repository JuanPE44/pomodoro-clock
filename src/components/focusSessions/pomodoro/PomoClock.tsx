import { CANT_LINES, DEGREE_DIFFERENCE } from "../../../config/pomoclock";
import Icon from "../../../icons/Icon";

export function PomoClock({
  time,
  pause,
  handsClockIndex,
  startTime,
  inBreak,
  setPause,
  setInSesion,
  setTime,
  startTimer,
  stopTimer,
}: {
  time: number;
  startTime: number;
  pause: boolean;
  handsClockIndex: number;
  inBreak: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setInSesion: (state: boolean) => void;
  startTimer: () => void;
  stopTimer: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="bg-pomodoro relative flex h-64 w-64 items-center justify-center rounded-full shadow-sm shadow-[#a8a8ab33]">
        <div className="flex flex-row items-end justify-center gap-1">
          <div className={`flex text-5xl ${inBreak ? "text-red-900" : "text-white"}`}>{time}</div>
          <div className={`text-xl ${inBreak ? "text-red-900" : "text-white"}`}>min</div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          {Array.from({ length: CANT_LINES }, (_, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center p-4"
              style={{
                transform: `rotate(${DEGREE_DIFFERENCE * index + 180}deg)`,
              }}
            >
              <div className="relative flex h-1 w-full items-end">
                {index <= handsClockIndex ? (
                  <div className={` ${inBreak ? "bg-red-900" : "bg-primary" } h-2 w-6 rounded-sm`} />
                ) : (
                  <div className="h-2 w-6 rounded-sm bg-[#6d736d4d]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="z-50 flex flex-col items-center gap-1">
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            className={`${inBreak ? "bg-red-900" : "bg-primary"} flex cursor-pointer items-center justify-center rounded-full p-2 text-black transition duration-200 ease-in-out hover:scale-105`}
            onClick={() => {
              setPause((prev) => {
                if (prev) {
                  startTimer();
                } else {
                  stopTimer();
                }
                return !prev;
              });
            }}
          >
            {pause ? (
              <Icon name="playPomo" color="#000" />
            ) : (
              <Icon name="pausePomo" color="#000" />
            )}
          </button>
          {pause && (
            <button
              className="bg-pomodoro flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-200 ease-in-out hover:scale-105"
              onClick={() => {
                setInSesion(false);
                setTime(startTime);
                setPause(false);
                stopTimer();
              }}
            >
              <Icon name="back" />
            </button>
          )}
          <button className="bg-pomodoro flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-200 ease-in-out hover:scale-105">
            <Icon name="menu" size={15} color="#fff" />
          </button>
        </div>
        {pause && <p className="py-3 text-xs text-neutral-300">Paused</p>}
      </div>
    </div>
  );
}
