import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../contexts/constants";
// import { Link } from "react-router-dom";

export default function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(function () {
    async function getData() {
      const res = await fetch(YOUTUBE_VIDEOS_URL);
      const data = await res.json();
      setVideos(data.items);
    }
    getData();
  }, []);
  return (
    <div className="z-0 flex pt-14 flex-wrap justify-center w-full">
      {videos.map((video) => (
        // <Link to={`watch?v=${video.id}`} key={video.id}>
        <VideoCard info={video} key={video.id} />
        // </Link>
      ))}
    </div>
  );
}
