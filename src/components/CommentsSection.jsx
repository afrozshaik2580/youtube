import { useEffect, useState } from "react";
import { GET_COMMENTS_URL } from "../contexts/constants";
import Comment from "./Comment";

export default function CommentsSection({ commentCount, videoId }) {
  const [comments, setComments] = useState([]);
  useEffect(
    function () {
      async function getComments() {
        const res = await fetch(GET_COMMENTS_URL + videoId);
        const data = await res.json();
        setComments(data.items);
      }
      getComments();
    },
    [videoId]
  );
  return (
    <div className="px-3 space-y-3 ">
      <h1 className="font-bold text-xl">{commentCount} Comments</h1>
      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}
