import {DrAspectRatio} from 'gloryui-react';

// TODO: youtube and Bilibili loading
export default function YouTube({id}: {id: string}) {
  return (
    <DrAspectRatio ratio="16:9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
      />
    </DrAspectRatio>
  );
}
