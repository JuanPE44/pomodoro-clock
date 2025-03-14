interface Props {
  size?: number;
  color?: string;
}
export function SvgTimer({ size = 15, color = "#fff" }: Props) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19 2v3a7 7 0 0 1-7 7M5 2v3a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7v3m-7-10a7 7 0 0 0-7 7v3M4 2h16m0 20H4"
        color="#ffffff"
      />
    </svg>
  );
}
