import { useEffect, useState } from "react";
import ButtonsTimer from "./ButtonsTimer";
import CircularBorderSVG from "./CircularBorderSvg";

interface PropTimer {
  seconds: number;
}

function Timer({ seconds }: PropTimer) {
  const [pause, setPause] = useState(true);
  const [init, setInit] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds); // 60 segundos (1 minuto)
  const handlePause = () => {
    setPause((prev) => {
      if (prev) {
        setPause(false);
      } else {
        setPause(true);
      }
      return !prev;
    });
  };

  useEffect(() => {
    if (timeLeft <= 0 || pause) return; // Detiene el timer en 0
    if (!init) {
      setInit(true);
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Limpieza al desmontar
  }, [timeLeft, pause, init]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-card flex flex-col items-center gap-4 rounded-2xl px-4 py-2">
      <header className="flex w-full items-center justify-between text-white">
        <span className="font-medium">{seconds / 60} min</span>
        <span>icono</span>
      </header>
      <div className="relative flex h-60 w-60 items-center justify-center rounded-full">
        <span className="text-4xl font-bold text-white">
          {formatTime(timeLeft)}
        </span>
        <CircularBorderSVG timeLeft={timeLeft} seconds={seconds} init={init} />
      </div>
      <ButtonsTimer pause={pause} handlePause={handlePause} />
    </div>
  );
}

export default Timer;
