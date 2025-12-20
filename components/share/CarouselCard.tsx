import Image from 'next/image';
import Link from 'next/link';

export default function CarouselCard({
  imgSrc,
  title,
  description,
  link,
}: {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="rounded-xl bg-gray-200 dark:bg-gray-700">
      <div className="relative w-full" style={{paddingTop: '56.25%'}}>
        <Image
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="project image"
          className="rounded-t-xl object-cover"
          loading="lazy"
          priority={false}
        />
      </div>
      <div className="space-y-6 p-8">
        <header className="text-center text-2xl font-semibold">
          <Link href={link} className="hover:text-king-500">
            {title}
          </Link>
        </header>
        <p>{description}</p>
        <Link
          href={link}
          className="group flex cursor-pointer items-center justify-center gap-3 text-center hover:text-king-500"
          aria-label={`find out more about ${title}`}
        >
          View detail
          <svg
            className="w-5 -rotate-90 duration-200 group-hover:translate-x-2"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
