function ContainerSection({ children }: React.PropsWithChildren) {
  return (
    <div className="flex-1 bg-neutral-800 p-6 overflow-y-auto max-h-screen">
      {children}
    </div>
  );
}

export default ContainerSection;
