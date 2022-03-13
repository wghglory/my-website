import {Player} from '@lottiefiles/react-lottie-player';

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
      <div className="container mx-auto space-y-6 py-10 px-6 sm:px-14 lg:px-20 lg:py-20">
        <header className="mb-10 flex flex-col sm:flex-row justify-center items-center sm:mb-14 lg:mb-20 gap-4">
          <h2 className="text-3xl lg:text-5xl">{title}</h2>
          {lottie && <Player autoplay loop src={`/lottie/${lottie}.json`} className="h-40 w-40"></Player>}
        </header>
        {children}
      </div>
    </section>
  );
}
