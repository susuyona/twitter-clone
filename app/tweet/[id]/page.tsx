"use client";

import { useState } from "react";
import Button from "@/app/components/button";
import Header from "@/app/components/header";
import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUser, toggleLike } from "./actions";

async function getTweet(id: number) {
  const tweet = await db.tweet.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        select: {
          username: true,
        },
      },
      likes: {
        select: {
          userId: true,
        },
      },
    },
  });
  return tweet;
}

export default async function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const tweet = await getTweet(id);
  if (!tweet) {
    return notFound();
  }
  const user = await getUser();
  const [isLiked, setIsLiked] = useState(
    tweet.likes.some((like) => like.userId === user!.id)
  );

  const handleLikeButtonClick = async () => {
    await toggleLike(tweet.id);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Header />
      <Link href="/">
        <Button text="Back to the list" />
      </Link>
      <div>
        <div>
          <h3>{tweet.author.username}</h3>
        </div>
        <div>
          <span>{tweet.text}</span>
        </div>
        <div>
          <span>{formatToTimeAgo(tweet.createdAt.toString())}</span>
        </div>
        <div>
          <span>How many? {tweet.likes.length}</span>
          <button onClick={handleLikeButtonClick}>
            {isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    </>
  );
}
