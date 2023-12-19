export default function Iframe({ id }) {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="rounded-2xl h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
