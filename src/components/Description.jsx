import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }

  if (seconds < 10) return "just now";

  return Math.floor(seconds) + " seconds ago";
}

export default function Description({ description, viewCount, publishedAt }) {
  if (viewCount / 1000000 < 999 && viewCount / 1000000 > 9) {
    viewCount = (viewCount / 1000000).toFixed(2) + "M";
  } else if (viewCount / 10000 < 999 && viewCount / 10000 > 9) {
    viewCount = (viewCount / 10000).toFixed(2) + "K";
  }
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-gray-200 rounded-xl p-4">
      <h1 className="font-semibold ">
        {viewCount} Views • {timeAgo(new Date(publishedAt))}
      </h1>
      <p>
        {showMore ? description : description.substring(0, 200)}
        <span
          className="font-semibold cursor-pointer"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Show less" : "...more"}
        </span>
      </p>
    </div>
  );
}
