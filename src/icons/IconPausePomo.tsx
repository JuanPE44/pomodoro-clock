interface Props {
    width?: number;
    height?: number;
    color?: string;
}

export function IconPausePomo({width = 15, height = 15, color = "black"}: Props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" ><path fill={color} d="M14 19V5h4v14zm-8 0V5h4v14z"/></svg>
    )
  }