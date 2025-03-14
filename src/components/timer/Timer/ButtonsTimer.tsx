import { IconBack } from "../../../icons/IconBack";
import { IconPausePomo } from "../../../icons/IconPausePomo";
import { IconPlayPomo } from "../../../icons/IconPlayPomo";

interface Props {
  pause: boolean;
  handlePause: () => void;
}

function ButtonsTimer({ pause, handlePause }: Props) {
  return (
    <div className="mb-4 flex flex-row items-center justify-center gap-2">
      <button
        className="bg-primary flex cursor-pointer items-center justify-center rounded-full p-2 text-black transition duration-200 ease-in-out hover:scale-105"
        onClick={() => handlePause()}
      >
        {pause ? (
          <IconPlayPomo width={15} height={15} color="black" />
        ) : (
          <IconPausePomo width={15} height={15} color="black" />
        )}
      </button>
      <button className="bg-pomodoro flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-200 ease-in-out hover:scale-105">
        <IconBack width={15} height={15} color="#fff" />
      </button>
    </div>
  );
}

export default ButtonsTimer;
