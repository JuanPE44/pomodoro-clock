interface Props {
  width?: number;
  height?: number;
}

export function IconMenu({ width = 20, height = 20 }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#ffffff"
        strokeLinejoin="round"
        strokeWidth="3.75"
        d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"
      />
    </svg>
  );
}
