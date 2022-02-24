export default function AppCardCover({cover_image}: {cover_image: string}) {
  return (
    <>
      <div className={`img-bg relative overflow-hidden pb-[56.25%]`}>
        {/* https://hypercolor.dev/ */}
        <img
          src={cover_image}
          className="absolute h-full w-full object-cover duration-300 group-hover:scale-105"
          alt="cover image"
        />
      </div>
      <style jsx>
        {`
          .img-bg {
            background-image: url(${cover_image}),
              linear-gradient(to right, rgb(254, 243, 199), rgb(252, 211, 77), rgb(245, 158, 11));
          }
        `}
      </style>
    </>
  );
}
