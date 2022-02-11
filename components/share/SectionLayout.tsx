export default function SectionLayout({
  children,
  title,
  id,
  bgClass = 'bg-gray-100 dark:bg-gray-800',
}: {
  children: React.ReactNode;
  title: string;
  id: string;
  bgClass?: string;
}) {
  return (
    <section className={bgClass} id={id}>
      <div className="container m-auto space-y-6 py-10 lg:px-6 lg:py-20">
        <header className="flex flex-col gap-6 px-6 text-center md:flex-row md:justify-between">
          <h2 className="text-2xl lg:text-left lg:text-5xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
