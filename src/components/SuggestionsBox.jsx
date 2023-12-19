import Suggestion from "./Suggestion";

export default function SuggestionsBox({ suggestions }) {
  return (
    <>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id.videoId} suggestion={suggestion} />
      ))}
    </>
  );
}
