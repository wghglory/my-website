import Image from 'next/image';

export default function CarouselCard({
  imgSrc,
  title,
  description,
}: {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="object-fit rounded-xl bg-gray-200 dark:bg-gray-700">
      <Image src={imgSrc} alt="project image" className="rounded-t-xl" />
      <div className="space-y-6 p-8">
        <header className="text-center text-2xl font-semibold">{title}</header>
        <p>{description}</p>
        <a className="block cursor-pointer text-center" href="#">
          Find Out More →
        </a>
      </div>
    </div>
  );
}
