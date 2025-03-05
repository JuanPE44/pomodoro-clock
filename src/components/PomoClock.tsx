
const CANT_LINES : number = 25
const DEGREE_DIFFERENCE : number = 360 / CANT_LINES
import { IconPlayPomo } from "../icons/IconPlayPomo";
import { IconBack } from "../icons/IconBack";
import { IconPausePomo } from "../icons/IconPausePomo";
import { IconSetting } from "../icons/IconSetting"


export function PomoClock({
    time,
    pause,
    setPause,
    setInSesion,
    startTimer,
    stopTimer
  }: {
    time: number;
    pause: boolean;
    setPause: React.Dispatch<React.SetStateAction<boolean>>;
    setInSesion: (state : boolean) => void;
    startTimer: () => void;
    stopTimer: () => void;
  }) {

   
    
    return (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="w-50 h-50 rounded-full bg-[#4f4f5256] m-10 flex items-center justify-center relative shadow-sm shadow-[#a8a8ab33]">
            <div className="h-[10%] flex flex-row items-end justify-center">
              <div className="text-white text-2xl mr-1 top-2 flex">{time}</div>
              <div className="text-white text-sm">minutos</div>
            </div>
            <div className="absolute">
              {Array.from({ length: CANT_LINES }, (_, index) => (
                <div
                  key={index}
                  className="h-1 w-1 absolute top-1/2 left-1/2"
                  style={{ transform: `rotate(${DEGREE_DIFFERENCE * index}deg)` }}
                >
                  <div className="h-23 w-1 relative flex items-end">
                    <div className="h-3 w-1 bg-[#6d736d4d] rounded-sm" />
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