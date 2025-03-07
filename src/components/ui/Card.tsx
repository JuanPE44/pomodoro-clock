interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`${className} bg-card rounded-2xl px-3 py-2 text-white shadow-2xl filter backdrop-blur-md`}
    >
      {children}
    </div>
  );
}
