import { formatToTimeAgo } from "@/lib/utils";
import { Tweet } from "@/lib/constants";

export default function TweetInDetail({
  id,
  text,
  likes,
  createdAt,
  authorId,
  author,
}: Tweet) {
  return (
    <div>
      <div>
        <span>{author.username}</span>
      </div>
      <div>
        <span>{text}</span>
      </div>
      <div>
        <span>{formatToTimeAgo(createdAt.toString())}</span>
      </div>
      <div>
        <span>How many likes? {likes.length}</span>
        <button>handlelike / "Unlike" : "Like"</button>
      </div>
    </div>
  );
}
