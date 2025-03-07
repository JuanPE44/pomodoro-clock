import { CANT_LINES, DEGREE_DIFFERENCE } from "../../../config/pomoclock";
import { IconBack } from "../../../icons/IconBack";
import { IconPausePomo } from "../../../icons/IconPausePomo";
import { IconPlayPomo } from "../../../icons/IconPlayPomo";
import { IconSetting } from "../../../icons/IconSetting";
import { useRef, useState, useEffect } from "react";

export function PomoClock({
  time,
  startTime,
  pause,
  handsClockIndex,
  setPause,
  setInSesion,
  startTimer,
  stopTimer,
}: {
  time: number;
  startTime: number;
  pause: boolean;
  handsClockIndex: number;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setInSesion: (state: boolean) => void;
  startTimer: () => void;
  stopTimer: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative m-10 flex h-64 w-64 items-center justify-center rounded-full bg-[#4f4f5256] shadow-sm shadow-[#a8a8ab33]">
        <div className="flex h-[10%] flex-row items-end justify-center">
          <div className="top-2 mr-1 flex text-5xl text-white">{time}</div>
          <div className="text-xl text-neutral-100">min</div>
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
                  <div className="bg-primary h-2 w-6 rounded-sm" />
                ) : (
                  <div className="h-2 w-6 rounded-sm bg-[#6d736d4d]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          className="m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black"
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
          className="m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black"
          onClick={() => {
            setInSesion(false);
            stopTimer();
          }}
        >
          <IconBack width={15} height={15} color="black" />
        </button>
        <button className="m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
          <IconSetting width={15} height={15} color="black" />
        </button>
      </div>
    </div>
  );
}
