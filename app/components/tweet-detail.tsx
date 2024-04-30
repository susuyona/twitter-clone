import { formatToTimeAgo } from "@/lib/utils";
import { Tweet } from "@/lib/constants";
import {
  checkLikedState,
  toggleLike as toggleLikeAction,
} from "../tweet/[id]/actions";
import { useEffect, useState } from "react";

export default function TweetInDetail(tweet: Tweet) {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    checkLikedState(tweet.id).then((isLiked) => setLiked(isLiked));
  }, [liked]);

  function toggleLike(tweetId: number) {
    toggleLikeAction(tweetId)
      .then((isLiked) => setLiked(isLiked))
      .catch((error) => console.error("Error toggling like:", error));
  }

  return (
    <div
      className="flex flex-col justify-center items-center max-w-sm mx-auto 
      gap-2 mb-5 p-5 rounded-xl border-[1px] border-black"
    >
      <div>
        <span>{tweet.author.username}</span>
      </div>
      <div>
        <span>{tweet.text}</span>
      </div>
      <div>
        <span className="text-xs">
          {formatToTimeAgo(tweet.createdAt.toString())}
        </span>
      </div>
      <div>
        <button
          onClick={() => toggleLike(tweet.id)}
          className="bg-orange-200 rounded-md text-black font-medium text-center
        hover:bg-orange-400 transition-colors px-2 py-1"
        >
          {liked ? "💔" : "💖"}
        </button>
      </div>
    </div>
  );
}
