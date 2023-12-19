import { useParams } from "react-router-dom";
import Button from "./Button";

const buttons = [
  "All",
  "Movies",
  "Mixes",
  "Live",
  "Lo-Fi",
  "Computers",
  "Playlists",
  "Ambient Music",
  "Mantras",
  "Piano",
  "Filmy",
  "Tamil Cinema",
  "Romantic",
  "Comedy",
  "Watched",
  "New to you",
  "Love songs",
  "Shah rukh khan",
  "Super heros",
];
export default function ButtonList() {
  const params = useParams();
  return (
    <div
      className={`z-20 pt-2 pb-3 pl-4 bg-white ${
        params.id ? "w-full" : "w-[calc(100%-6rem)] fixed"
      }`}
    >
      <div className="overflow-hidden button-wrapper space-x-3 flex overflow-x-scroll ">
        {buttons.map((button) => (
          <Button name={button} key={button} />
        ))}
      </div>
    </div>
  );
}
