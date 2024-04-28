import { formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";
import { Tweet } from "@/lib/constants";

export default function TweetInList({
  id,
  text,
  likes,
  createdAt,
  authorId,
  author,
}: Tweet) {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto 
      gap-2 mb-5 p-5 rounded-xl border-[1px] border-black"
    >
      <div>
        <span>{author.username}</span>
      </div>
      <div>
        <Link href={`/tweet/${id}`}>
          <span>{text}</span>
        </Link>
      </div>
      <div>
        <span className="text-xs">{formatToTimeAgo(createdAt.toString())}</span>
      </div>
      <div className="flex">
        <span>❤️ {likes.length}</span>
      </div>
    </div>
  );
}
