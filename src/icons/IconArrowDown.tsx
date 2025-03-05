interface Props{
    width?: number;
    height?: number;
}
export function IconArrowDown({width = 15, height = 15}: Props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
    )
  }