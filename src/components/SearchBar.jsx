import { useState } from "react";
import { SEARCH_ICON_SVG } from "../contexts/SVGs";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setsearchQuery] = useState("");
  const navigate = useNavigate();
  // useEffect(
  //   function () {
  //     async function getSearchSuggestions() {
  //       const res = await fetch(
  //         "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded"
  //       );
  //       const data = await res.json();
  //       const searchSuggestions = [];
  //       data.split("[").forEach((ele, index) => {
  //         if (!ele.split('"')[1] || index === 1) return;
  //         return searchSuggestions.push(ele.split('"')[1]);
  //       });
  //       console.log(searchSuggestions);
  //     }
  //     getSearchSuggestions();
  //   },
  //   [search]
  // );

  return (
    <>
      <input
        value={searchQuery}
        onChange={(e) => {
          setsearchQuery(e.target.value);
        }}
        className="border pl-5 border-gray-300 w-11/12 rounded-l-full h-10 text-base"
        type="text"
        placeholder="Search"
      />
      <button
        onClick={() => {
          navigate(`/results?search_query=${searchQuery}`);
        }}
        className="border border-gray-300 w-1/12 rounded-r-full text-center bg-gray-200 hover:bg-gray-300"
      >
        {SEARCH_ICON_SVG}
      </button>
    </>
  );
}
