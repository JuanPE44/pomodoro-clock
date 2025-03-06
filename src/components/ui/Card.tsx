interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`${className} py-2 px-3 text-white bg-card shadow-2xl filter backdrop-blur-md rounded-2xl`}
    >
      {children}
    </div>
  );
}
