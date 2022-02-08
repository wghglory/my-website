export default function PostCover({cover_image}: {cover_image: string}) {
  return (
    <>
      <div className={`post-bg h-48 rounded-t-xl bg-cover bg-center bg-no-repeat`}>{/* https://hypercolor.dev/ */}</div>
      <style jsx>
        {`
          .post-bg {
            background-image: url(${cover_image}),
              linear-gradient(to right, rgb(254, 243, 199), rgb(252, 211, 77), rgb(245, 158, 11));
          }
        `}
      </style>
    </>
  );
}
