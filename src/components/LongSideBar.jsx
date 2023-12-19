import LongSideBarButton from "./LongSideBarButton";
import {
  ADITYA_MUSIC_IMG,
  CARRY_MINATI_IMG,
  ED_SHEERAN_IMG,
  GAMING_SVG,
  HELP_SVG,
  HISTORY_SVG,
  LEARNING_SVG,
  LIKED_VIDEOS_SVG,
  LIVE_SVG,
  LONG_SIDEBAR_HOME_SVG,
  LONG_SIDEBAR_SHORTS_SVG,
  LONG_SIDEBAR_SUBSCRIPTIONS_SVG,
  MOULI_TALKS_IMG,
  MOVIES_SVG,
  MUSIC_SVG,
  MY_MIX_SVG,
  NEWS_SVG,
  REPORT_HISTORY_SVG,
  RIGHT_ARROW_SVG,
  SEND_FEEDBACK_SVG,
  SETTINGS_SVG,
  SHOPPING_SVG,
  SHOW_LESS_SVG,
  SHOW_MORE_SVG,
  SPORTS_SVG,
  TRENDING_SVG,
  WATCH_LATER_SVG,
  YOUR_CHANNEL_SVG,
  YOUR_VIDEOS_SVG,
  YOUTUBE_KIDS_SVG,
  YOUTUBE_MUSIC_SVG,
  YOUTUBE_PREMIUM_SVG,
  YOUTUBE_STUDIO_SVG,
} from "../contexts/SVGs";
import { useState } from "react";

export default function LongSideBar() {
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  return (
    <div className="z-50 w-60 p-3 shadow sidebar fixed left-0 h-full bg-white overflow-y-scroll">
      <LongSideBarButton SVG={LONG_SIDEBAR_HOME_SVG} name="Home" to="/" />
      <LongSideBarButton
        SVG={LONG_SIDEBAR_SHORTS_SVG}
        name="Shorts"
        to="shorts"
      /> 
      <LongSideBarButton
        SVG={LONG_SIDEBAR_SUBSCRIPTIONS_SVG}
        name="Subscription"
        to="subscriptions"
      />

      <hr className="m-2" />

      <div className="hover:bg-gray-300 rounded-xl">
        <div id="you" className="flex items-center space-x-2 p-2">
          <p className="font-medium text-base">You</p>
          {RIGHT_ARROW_SVG}
        </div>
      </div>
      <LongSideBarButton SVG={YOUR_CHANNEL_SVG} name="Your channel" />
      <LongSideBarButton SVG={HISTORY_SVG} name="History" />
      <LongSideBarButton SVG={YOUR_VIDEOS_SVG} name="Your videos" />
      <LongSideBarButton SVG={WATCH_LATER_SVG} name="Watch later" />

      {isShowMoreOpen && (
        <>
          <LongSideBarButton SVG={MY_MIX_SVG} name="My mix" />
          <LongSideBarButton SVG={LIKED_VIDEOS_SVG} name="Liked videos" />
        </>
      )}
      {isShowMoreOpen ? (
        <LongSideBarButton
          SVG={SHOW_LESS_SVG}
          name="Show less"
          onClickAction={function abc() {
            setIsShowMoreOpen(!isShowMoreOpen);
          }}
        />
      ) : (
        <LongSideBarButton
          SVG={SHOW_MORE_SVG}
          name="Show more"
          onClickAction={function abc() {
            setIsShowMoreOpen(!isShowMoreOpen);
          }}
        />
      )}

      <hr className="m-2" />

      <h1 className="font-medium ml-1">Subscriptions</h1>
      <LongSideBarButton SVG={ADITYA_MUSIC_IMG} name="Aditya Music India" />
      <LongSideBarButton SVG={MOULI_TALKS_IMG} name="Mouli Talks" />
      <LongSideBarButton SVG={CARRY_MINATI_IMG} name="CarryMinati" />
      <LongSideBarButton SVG={ED_SHEERAN_IMG} name="Ed Sheeran" />

      <hr className="m-2" />

      <h1 className="font-medium ml-1">Explore</h1>
      <LongSideBarButton SVG={TRENDING_SVG} name="Trending" />
      <LongSideBarButton SVG={SHOPPING_SVG} name="Shopping" />
      <LongSideBarButton SVG={MUSIC_SVG} name="Music" />
      <LongSideBarButton SVG={MOVIES_SVG} name="Movies" />
      <LongSideBarButton SVG={LIVE_SVG} name="Live" />
      <LongSideBarButton SVG={GAMING_SVG} name="Gaming" />
      <LongSideBarButton SVG={NEWS_SVG} name="News" />
      <LongSideBarButton SVG={SPORTS_SVG} name="Sports" />
      <LongSideBarButton SVG={LEARNING_SVG} name="Learning" />

      <hr className="m-2" />

      <h1 className="font-medium ml-1">More from YouTube</h1>
      <LongSideBarButton SVG={YOUTUBE_PREMIUM_SVG} name="YouTube Premium" />
      <LongSideBarButton SVG={YOUTUBE_STUDIO_SVG} name="YouTube Studio" />
      <LongSideBarButton SVG={YOUTUBE_MUSIC_SVG} name="YouTube Music" />
      <LongSideBarButton SVG={YOUTUBE_KIDS_SVG} name="YouTube Kids" />

      <hr className="m-2" />

      <LongSideBarButton SVG={SETTINGS_SVG} name="Settings" />
      <LongSideBarButton SVG={REPORT_HISTORY_SVG} name="Report history" />
      <LongSideBarButton SVG={HELP_SVG} name="Help" />
      <LongSideBarButton SVG={SEND_FEEDBACK_SVG} name="Send feedback" />

      <hr className="m-2" />

      <div className="flex flex-wrap px-2 ">
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          About
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Press
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Copyright
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Contact us
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Creators
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Advertise
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Developers
        </a>
      </div>

      <br />

      <div className="flex flex-wrap px-2 ">
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Terms
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Privacy
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Policy & safety
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          How YouTube works
        </a>
        <a className="font-medium text-sm text-gray-500 mx-1 " href="">
          Test new features
        </a>
      </div>

      <p className="text-sm mt-2 p-2 text-gray-500">©️ 2023 Google LLC</p>
      <br />
      <br />
      <br />
    </div>
  );
}
