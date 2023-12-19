import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";
import {
  CREATE_ICON_SVG,
  HAMBURGER_MENU_SVG,
  MIC_ICON_SVG,
  NOTIFICATION_ICON_SVG,
  USER_PROFILE_IMG,
  YOUTUBE_SVG,
} from "../contexts/SVGs";
import SearchBar from "./SearchBar";

export default function Head() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  return (
    <div className="grid grid-cols-12 py-3 px-4 sticky top-0 w-full bg-white z-50">
      <div className="flex justify-start col-span-3">
        <button
          onClick={() => {
            dispatch({ type: "toggleMenuHandler" });
          }}
        >
          {HAMBURGER_MENU_SVG}
        </button>
        <div
          className="w-24 ml-2 flex cursor-pointer"
          onClick={() => navigate("/")}
        >
          {YOUTUBE_SVG}
        </div>
      </div>
      <div className="flex justify-center col-span-6">
        <div className="flex w-11/12">
          <SearchBar />
        </div>
        <button className="w-[40px] rounded-full ml-2 bg-gray-200 border border-gray-200 hover:bg-gray-300">
          {MIC_ICON_SVG}
        </button>
      </div>
      <div className="flex justify-end col-span-3 mr-5 space-x-2">
        <button className="w-10 rounded-full hover:bg-gray-300">
          {CREATE_ICON_SVG}
        </button>
        <button className="w-10 rounded-full hover:bg-gray-300">
          {NOTIFICATION_ICON_SVG}
        </button>
        {USER_PROFILE_IMG}
      </div>
    </div>
  );
}
