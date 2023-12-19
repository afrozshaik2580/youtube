import {
  DISLIKE_SVG,
  LIKE_SVG,
  SHARE_SVG,
  THREE_DOTS_SVG,
} from "../contexts/SVGs";

export default function ChannelDetails({
  channelImg,
  channelTitle,
  channelSubscribers,
  likeCount,
}) {
  if (channelSubscribers / 1000000 < 999 && channelSubscribers / 1000000 > 9) {
    channelSubscribers = (channelSubscribers / 1000000).toFixed(2) + "M";
  } else if (
    channelSubscribers / 10000 < 999 &&
    channelSubscribers / 10000 > 9
  ) {
    channelSubscribers = (channelSubscribers / 10000).toFixed(2) + "K";
  }

  if (likeCount / 1000000 < 999 && likeCount / 1000000 > 9) {
    likeCount = (likeCount / 1000000).toFixed(2) + "M";
  } else if (likeCount / 10000 < 999 && likeCount / 10000 > 9) {
    likeCount = (likeCount / 10000).toFixed(2) + "K";
  }

  return (
    <div className="md:grid grid-cols-2">
      <div className="md:w-full lg:col-span-1 space-x-3 flex items-center">
        <img
          className="rounded-full max-w-[40px] max-h-[40px]"
          src={channelImg}
          alt=""
        />
        <div>
          <p>{channelTitle}</p>
          <p>{channelSubscribers}</p>
        </div>
        <button className="w-28 h-[85%] bg-black text-white rounded-3xl">
          Subscribe
        </button>
      </div>
      <div className="md:w-full lg:col-span-1 flex lg:justify-end items-center space-x-3 ">
        <div className="w-36 flex h-[80%] space-x-4 bg-gray-200 rounded-full">
          <button className="flex justify-center items-center pl-3 space-x-2 ">
            {LIKE_SVG} <span>{likeCount}</span>
          </button>
          <button className="flex justify-center items-center ">
            {DISLIKE_SVG}
          </button>
        </div>
        <button className="w-24 flex items-center justify-center h-[80%] bg-gray-200 rounded-full">
          {SHARE_SVG}
          <p>Share</p>
        </button>
        <button className="w-9 flex items-center justify-center h-[80%] bg-gray-200 rounded-full">
          {THREE_DOTS_SVG}
        </button>
      </div>
    </div>
  );
}
