interface Props {
  width?: number;
  height?: number;
  color?: string;
}
export function IconArrowDown({ width = 15, height = 15, color="white" }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 10l5 5m0 0l5-5"
      />
    </svg>
  );
}
