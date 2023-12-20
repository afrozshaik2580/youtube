import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import ButtonList from "./ButtonList";
import { useEffect, useState } from "react";
import {
  CHENNELS_DATA_URL,
  GET_VIDEOS_BY_SEARCH,
  GET_VIDEO_DETAILS_URL,
} from "../contexts/constants";
import SuggestionsBox from "./SuggestionsBox";
import ChannelDetails from "./ChannelDetails";
import Iframe from "./Iframe";
import Title from "./Title";
import Description from "./Description";
import CommentsSection from "./CommentsSection";
import LiveChat from "./LiveChat";

export default function WatchPage() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [channelDetails, setChannelDetails] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const { snippet, statistics } = videoDetails;
  var title = "",
    channelTitle = "",
    description = "",
    channelImg = "",
    channelSubscribers = "",
    likeCount = "",
    viewCount = "",
    publishedAt = "",
    commentCount = "";

  useEffect(
    function () {
      async function getVideoDetails() {
        const videoRes = await fetch(GET_VIDEO_DETAILS_URL + id);
        const videoData = await videoRes.json();
        setVideoDetails(videoData.items[0]);

        const suggestionsText = videoData.items[0].snippet.tags
          ? videoData.items[0].snippet.tags[5]
          : videoData.items[0].snippet.title.substring(0, 10);
        const suggestionsRes = await fetch(
          GET_VIDEOS_BY_SEARCH + suggestionsText
        );
        const suggestionsData = await suggestionsRes.json();
        setSuggestions(suggestionsData.items);

        const channelId = videoData.items[0].snippet.channelId;
        const channelRes = await fetch(CHENNELS_DATA_URL + channelId);
        const channelData = await channelRes.json();
        setChannelDetails(channelData.items[0]);
      }
      getVideoDetails();
    },
    [id]
  );

  try {
    title = snippet.title;
    channelTitle = snippet.channelTitle;
    description = snippet.description;
    publishedAt = snippet.publishedAt;
    likeCount = statistics.likeCount;
    viewCount = statistics.viewCount;
    commentCount = statistics.commentCount;
    channelImg = channelDetails.snippet.thumbnails.medium.url;
    channelSubscribers = channelDetails.statistics.subscriberCount;
  } catch (e) {
    /* empty */
  }

  return (
    <div className="flex">
      <SideBar display="hidden" />
      <div className="w-[65%] flex justify-center">
        <div className="space-y-4 w-[90%]">
          <Iframe id={id} />
          <Title title={title} />
          <ChannelDetails
            channelImg={channelImg}
            channelTitle={channelTitle}
            channelSubscribers={channelSubscribers}
            likeCount={likeCount}
          />
          <Description
            description={description}
            viewCount={viewCount}
            publishedAt={publishedAt}
          />
          <CommentsSection commentCount={commentCount} videoId={id} />
        </div>
      </div>
      <div className="w-[35%] overflow-hidden pr-3 ">
        <LiveChat />
        <ButtonList />
        <SuggestionsBox suggestions={suggestions} />
      </div>
    </div>
  );
}
