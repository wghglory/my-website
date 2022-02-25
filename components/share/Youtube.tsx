// TODO: youtube and Bilibili loading
export default function YouTube({id}: {id: string}) {
  return (
    <div className="relative h-0 max-w-full overflow-hidden pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
