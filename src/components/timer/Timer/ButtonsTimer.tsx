import Icon from "../../../icons/Icon";

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
          <Icon name="playPomo" color="black" />
        ) : (
          <Icon name="pausePomo" color="black" />
        )}
      </button>
      <button className="bg-pomodoro flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-200 ease-in-out hover:scale-105">
        <Icon name="back" />
      </button>
    </div>
  );
}

export default ButtonsTimer;
