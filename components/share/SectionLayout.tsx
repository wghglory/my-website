export default function SectionLayout({
  children,
  title,
  id,
  bgClass = 'bg-gray-100 dark:bg-gray-800',
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
  bgClass?: string;
}) {
  return (
    <section className={bgClass} id={id}>
      <div className="container mx-auto my-10 space-y-6 px-6 sm:px-14 lg:my-20 xl:px-6">
        <header className="mb-10 flex flex-col gap-6 text-center sm:mb-14 md:flex-row md:justify-between">
          <h2 className="text-3xl lg:text-left lg:text-5xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
