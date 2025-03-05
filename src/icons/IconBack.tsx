interface Props {
    width?: number;
    height?: number;
    color?: string;
}

export function IconBack({width = 15, height = 15, color = "black"}: Props){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" ><g fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m13 8l-7 6l7 7"/><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"/></g></svg>
    )
  }