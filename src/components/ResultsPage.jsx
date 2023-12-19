import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "./SideBar";
import { GET_VIDEOS_BY_SEARCH } from "../contexts/constants";
import SearchedVideo from "./SearchedVideo";

export default function ResultsPage() {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get("search_query");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(
    function () {
      async function getSearchedMovies() {
        const res = await fetch(GET_VIDEOS_BY_SEARCH + searchQuery);
        const data = await res.json();
        setSearchedMovies(data.items);
        console.log(data.items[0]);
      }
      getSearchedMovies();
    },
    [searchQuery]
  );
  return (
    <div>
      <SideBar />
      <div className="w-[calc(100%-5rem)] ml-auto overflow-hidden px-[2%] py-1">
        <div>
          {searchedMovies.map((video) => (
            <SearchedVideo key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
