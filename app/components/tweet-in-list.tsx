import { formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";
import { Tweet } from "@/lib/constants";

export default function TweetInList({
  id,
  text,
  likes,
  createdAt,
  authorId,
  author
}: Tweet) {
  return (
    <div>
      <div>
        <span>{author.username}</span>
      </div>
      <div>
        <Link href={`/tweet/${id}`}>
          <span>{text}</span>
        </Link>
        <span>{formatToTimeAgo(createdAt.toString())}</span>
      </div>
      <div>
        <span>How many likes? {likes.length}</span>
      </div>
    </div>
  );
}
