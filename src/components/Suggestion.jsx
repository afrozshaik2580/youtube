import { timeAgo } from "./Description";

export default function Suggestion({ suggestion }) {
  var img, title, channelTitle, publishTime;
  try {
    img = suggestion.snippet.thumbnails.medium.url;
    title = suggestion.snippet.title;
    channelTitle = suggestion.snippet.channelTitle;
    publishTime = suggestion.snippet.publishTime;
  } catch (e) {
    /* empty */
  }
  return (
    <div className="flex pl-3 py-2">
      <div className="w-[41%]">
        <img className=" rounded-xl" src={img} alt="" />
      </div>
      <div className="w-[59%] px-2">
        <h1 className="line-clamp-2 font-semibold ">{title}</h1>
        <p className="text-sm text-gray-600">{channelTitle}</p>
        <p className="text-sm text-gray-600">
          {timeAgo(new Date(publishTime))}
        </p>
      </div>
    </div>
  );
}
