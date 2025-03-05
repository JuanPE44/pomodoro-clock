interface Props {
  width?: number;
  height?: number;
}
export function IconArrowUp({ width = 15, height = 15 }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17 14l-5-5m0 0l-5 5"
      />
    </svg>
  );
}
