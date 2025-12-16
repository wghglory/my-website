import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player) as Promise<React.ComponentType<any>>,
  {ssr: false},
);

export default function SectionLayout({
  children,
  title,
  id,
  lottie,
  className = 'bg-gray-100 dark:bg-gray-800',
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
  lottie?: string;
  className?: string;
}) {
  return (
    <section className={className} id={id}>
      <div className="container mx-auto space-y-6 px-6 py-10 sm:px-14 lg:px-20 lg:py-20">
        <header className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-14 sm:flex-row lg:mb-20">
          <h2 className="text-3xl lg:text-5xl">{title}</h2>
          {lottie && <Player autoplay loop src={`/lottie/${lottie}.json`} className="h-40 w-40"></Player>}
        </header>
        {children}
      </div>
    </section>
  );
}
