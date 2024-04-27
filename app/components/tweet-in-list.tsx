import { formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";

interface TweetProps {
  id: number;
  text: string;
  likes: object[];
  createdAt: Date;
  authorId: number;
}

export default function TweetInList({
  id,
  text,
  likes,
  createdAt,
  authorId,
}: TweetProps) {
  return (
    <div>
      <div>
        <span>Author</span>
      </div>
      <div>
        <Link href={`/tweet/${id}`}>
          <span>{text}</span>
        </Link>
        <span>{formatToTimeAgo(createdAt.toString())}</span>
      </div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}
