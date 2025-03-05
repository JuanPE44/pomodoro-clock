interface Props {
    width?: number;
    height?: number;
    color?: string;
  }
  
  export function IconPlayPomo({ width = 15, height = 15, color = "black" }: Props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
        <path fill={color} d="M15.544 9.59a1 1 0 0 1-.053 1.728L6.476 16.2A1 1 0 0 1 5 15.321V4.804a1 1 0 0 1 1.53-.848z" />
      </svg>
    );
  }
  