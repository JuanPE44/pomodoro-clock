import { useEffect, useState } from "react";
import ButtonsTimer from "./ButtonsTimer";

interface PropTimer {
  seconds: number;
}

function Timer({ seconds }: PropTimer) {
  const [pause, setPause] = useState(true);
  const [timeLeft, setTimeLeft] = useState(seconds); // 60 segundos (1 minuto)

  useEffect(() => {
    if (timeLeft <= 0) return; // Detiene el timer en 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Limpieza al desmontar
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-card flex flex-col items-center rounded-2xl p-2">
      <header>
        <span className="text-white">{seconds / 60} min</span>
      </header>
      <div className="">
        <span className="text-4xl font-bold text-white">
          {formatTime(timeLeft)}
        </span>
      </div>
      <ButtonsTimer pause={pause} setPause={setPause} />
    </div>
  );
}

export default Timer;
