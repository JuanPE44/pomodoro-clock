interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function IconPlus({ width = 18, height = 18, color = "#fff" }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path fill={color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </svg>
  );
}
