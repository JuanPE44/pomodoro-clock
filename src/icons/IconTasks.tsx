interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function IconTasks({ width = 25, height = 25, color = "#fff" }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.4 2h13.2A3.4 3.4 0 0 1 22 5.4v13.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 18.6V5.4A3.4 3.4 0 0 1 5.4 2M7 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m6 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
