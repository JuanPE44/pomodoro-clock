function ContainerSection({ children }: React.PropsWithChildren) {
  return (
    <div className="max-h-screen flex-1 overflow-y-auto bg-neutral-800 p-6">
      {children}
    </div>
  );
}

export default ContainerSection;
