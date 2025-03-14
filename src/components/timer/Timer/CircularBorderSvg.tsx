interface Props {
  timeLeft: number;
  seconds: number;
  init: boolean;
}

const CircularBorderSVG = ({ timeLeft, seconds, init }: Props) => {
  const percentage = (timeLeft / seconds) * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - percentage / 100);
  return (
    <svg
      className="absolute top-0 left-0 h-full w-full rounded-full"
      viewBox="0 0 120 120"
    >
      <circle
        cx="60"
        cy="60"
        r={radius}
        className="stroke-neutral-700"
        strokeWidth="10"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        className={!init ? "stroke-neutral-700" : "stroke-primary"}
        strokeWidth="10"
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        style={{
          transition: "stroke-dashoffset 0.5s linear",
        }}
      />
    </svg>
  );
};

export default CircularBorderSVG;
