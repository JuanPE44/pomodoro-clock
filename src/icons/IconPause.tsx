interface Props {
  width?: number;
  height?: number;
}

export function IconPause({ width = 15, height = 15 }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12">
      <g fill="#ffffff">
        <rect width="3" height="10" x="2" y="1" rx="1" ry="1" />
        <rect width="3" height="10" x="7" y="1" rx="1" ry="1" />
      </g>
    </svg>
  );
}
