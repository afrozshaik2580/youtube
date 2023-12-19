import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CHENNELS_DATA_URL } from "../contexts/constants";
import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";

export default function VideoCard({ info }) {
  // if (!info) return <Spinner />;
  const [channelImg, setChannelImg] = useState();
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const navigate = useNavigate();

  var views = statistics.viewCount;
  if (views / 1000000 < 999 && views / 1000000 > 9) {
    views = (views / 1000000).toFixed(2) + "M";
  } else if (views / 10000 < 999 && views / 10000 > 9) {
    views = (views / 10000).toFixed(2) + "K";
  }

  useEffect(function () {
    async function getChannelDetails() {
      const res = await fetch(CHENNELS_DATA_URL + info.snippet.channelId);
      const data = await res.json();
      console.log(data);
      setChannelImg(data.items[0].snippet.thumbnails.medium.url);
    }
    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={() => navigate(`watch/${info.id}`)}
      onMouseOver={() => setIsMouseHovering(true)}
      onMouseOut={() => setIsMouseHovering(false)}
      className="p-2 mx-1 my-3 lg:w-[32%] md:w-[48%] sm:w-full cursor-pointer"
    >
      <img
        className={`rounded-3xl w-full duration-100 ${
          isMouseHovering ? "rounded-none" : ""
        }`}
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex space-x-2">
        <div>
          <img
            className="mt-2 rounded-full max-w-[40px]"
            src={channelImg}
            alt=""
          />
        </div>
        <div>
          <div className="font-semibold pt-2 box-border line-clamp-2 leading-5">
            {title}
          </div>
          <p className="text-sm">{channelTitle}</p>
          <p className="text-sm">{views} views</p>
        </div>
      </div>
    </div>
  );
}
