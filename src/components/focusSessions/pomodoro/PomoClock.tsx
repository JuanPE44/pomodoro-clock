import { IconBack } from "../../../icons/IconBack";
import { IconPausePomo } from "../../../icons/IconPausePomo";
import { IconPlayPomo } from "../../../icons/IconPlayPomo";
import { IconSetting } from "../../../icons/IconSetting";
import { useRef, useState, useEffect } from "react";

const CANT_LINES: number = 25;
const DEGREE_DIFFERENCE: number = 360 / CANT_LINES;

export function PomoClock({
  time,
  startTime,
  pause,
  setPause,
  setInSesion,
  startTimer,
  stopTimer,
}: {
  time: number;
  startTime: number;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setInSesion: (state: boolean) => void;
  startTimer: () => void;
  stopTimer: () => void;
}) {
  const timeDiff = (startTime / CANT_LINES) * 60 * 1000;
  const intervalRef = useRef<number | null>(null);
  const [handsClockIndex, setHandsClockIndex] = useState(0);

  const countDown = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      console.log(handsClockIndex);
      setHandsClockIndex((prevIndex) => prevIndex + 1);
    }, timeDiff);
  };

  useEffect(() => {
    countDown();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [countDown]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-[#4f4f5256] m-10 flex items-center justify-center relative shadow-sm shadow-[#a8a8ab33]">
        <div className="h-[10%] flex flex-row items-end justify-center">
          <div className="text-white text-5xl mr-1 top-2 flex">{time}</div>
          <div className="text-neutral-100 text-xl">min</div>
        </div>
        <div className="absolute h-full w-full top-0 left-0">
          {Array.from({ length: CANT_LINES }, (_, index) => (
            <div
              key={index}
              className="h-full w-full absolute flex justify-center items-center p-4 top-0 left-0"
              style={{
                transform: `rotate(${DEGREE_DIFFERENCE * index + 180}deg)`,
              }}
            >
              <div className="h-1 w-full relative flex items-end">
                {index <= handsClockIndex ? (
                  <div className="h-2 w-6 bg-primary rounded-sm" />
                ) : (
                  <div className="h-2 w-6 bg-[#6d736d4d] rounded-sm" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          className="w-6 h-6 text-black rounded-full bg-white m-2 flex items-center justify-center"
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
            <IconPlayPomo width={15} height={15} color="black" />
          ) : (
            <IconPausePomo width={15} height={15} color="black" />
          )}
        </button>
        <button
          className="w-6 h-6 text-black rounded-full bg-white m-2 flex items-center justify-center"
          onClick={() => {
            setInSesion(false);
            stopTimer();
          }}
        >
          <IconBack width={15} height={15} color="black" />
        </button>
        <button className="w-6 h-6 text-black rounded-full bg-white m-2 flex items-center justify-center">
          <IconSetting width={15} height={15} color="black" />
        </button>
      </div>
    </div>
  );
}
