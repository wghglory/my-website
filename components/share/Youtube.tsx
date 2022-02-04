export default function YouTube({id}: {id: string}) {
  return (
    <div className="relative hidden h-0 pb-9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  );
}
