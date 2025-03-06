interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function IconIncomplete({
  width = 12,
  height = 12,
  color = "#fff",
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color={color}
      />
    </svg>
  );
}
