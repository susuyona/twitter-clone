import { formatToTimeAgo } from "@/lib/utils";
import { Tweet } from "@/lib/constants";

export default function TweetInDetail({
  id,
  text,
  likes,
  createdAt,
  authorId,
  author,
  handleLike,
  likedMessage,
}: Tweet & { handleLike: () => void; likedMessage: boolean }) {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-sm mx-auto 
      gap-2 mb-5 p-5 rounded-xl border-[1px] border-black"
    >
      <div>
        <span>{author.username}</span>
      </div>
      <div>
        <span>{text}</span>
      </div>
      <div>
        <span className="text-xs">{formatToTimeAgo(createdAt.toString())}</span>
      </div>
      <div>
        <button
          onChange={handleLike}
          className="bg-orange-200 rounded-md text-black font-medium text-center
        hover:bg-orange-400 transition-colors px-2 py-1"
        >
          {likedMessage ? "💔" : "💖"}
        </button>
      </div>
    </div>
  );
}
