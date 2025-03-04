interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`${className} p-2 text-white bg-card filter backdrop-blur-md rounded-2xl`}
    >
      {children}
    </div>
  );
}
