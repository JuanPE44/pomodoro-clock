interface Props {
  width?: number;
  height?: number;
}

export function IconPlay({ width = 15, height = 15 }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 384 512">
      <path
        fill="#ffffff"
        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"
      />
    </svg>
  );
}
