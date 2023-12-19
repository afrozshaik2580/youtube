import { useState } from "react";
import { timeAgo } from "./Description";
import { useNavigate } from "react-router-dom";

export default function SearchedVideo({ video }) {
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();
  var snippet, thumbnail, title, publishTime, channelTitle, description;

  try {
    snippet = video.snippet;
    thumbnail = snippet.thumbnails.medium.url;
    title = snippet.title;
    publishTime = snippet.publishTime;
    channelTitle = snippet.channelTitle;
    description = snippet.description;
  } catch (e) {
    /* empty */
  }
  return (
    <div
      onClick={() => navigate(`/watch/${video.id.videoId}`)}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      className="w-full flex space-x-3 p-5 cursor-pointer "
    >
      <div className="w-[30%]">
        <img
          className={`${hovering ? "" : "rounded-2xl"}`}
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="w-[70%] space-y-2">
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>• {timeAgo(new Date(publishTime))}</p>
        </div>
        <div className="flex space-x-2">
          <img
            className=""
            src="https://cdn-icons-png.flaticon.com/512/9131/9131549.png"
            width="24"
            height="24"
            alt="User free icon"
          />
          <p className="text-sm text-gray-500">{channelTitle}</p>
        </div>
        <p className="line-clamp-1 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}
