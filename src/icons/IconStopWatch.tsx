interface Props {
  width?: number;
  height?: number;
  color?: string;
}
export function IconStopWatch({width=15,height=15,color="#fff"}: Props) {
  return (
    <svg height={height} width={width}  viewBox="0 0 24 24"><path fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V9m9-3l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"/></svg>
  )
}