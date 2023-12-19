import { DISLIKE_SVG, LIKE_SVG } from "../contexts/SVGs";
import { timeAgo } from "./Description";

export default function Comment({ comment }) {
  var snippet, textDisplay, username, userImg, likeCount, publishedAt;
  try {
    snippet = comment.snippet.topLevelComment.snippet;
    textDisplay = snippet.textDisplay;
    username = snippet.authorDisplayName;
    userImg = snippet.authorProfileImageUrl;
    likeCount = snippet.likeCount;
    publishedAt = snippet.publishedAt;
  } catch (e) {
    /* empty */
  }
  return (
    <div className="flex space-x-2 overflow-hidden">
      <div className="w-[8%]">
        <img className="rounded-full" src={userImg} alt="img" />
      </div>
      <div className="w-[92%] space-y-1">
        <h1 className="font-semibold">
          {username} •{" "}
          <span className="font-normal text-gray-500">
            {timeAgo(new Date(publishedAt))}
          </span>
        </h1>
        <p className="">{textDisplay}</p>
        <div className="flex items-center space-x-7 ">
          <button
            className="flex space-x-2"
            onClick={(e) => {
              e.target.setAttribute("color", "red");
              console.log(e.target);
            }}
          >
            {LIKE_SVG} <span className="text-gray-500">{likeCount}</span>
          </button>
          <button>{DISLIKE_SVG}</button>
          <button className="text-gray-500">Reply</button>
        </div>
      </div>
    </div>
  );
}
