export default function SectionLayout({
  children,
  title,
  id,
  className = 'bg-gray-100 dark:bg-gray-800',
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
  className?: string;
}) {
  return (
    <section className={className} id={id}>
      <div className="container mx-auto space-y-6 py-10 px-6 sm:px-14 lg:py-20 xl:px-6">
        <header className="mb-10 flex flex-col gap-6 text-center sm:mb-14 md:flex-row md:justify-between lg:mb-20">
          <h2 className="text-3xl lg:text-left lg:text-5xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
