"use server";

import db from "@/lib/db";

export async function getMoreTweets(page: number) {
  const tweets = await db.tweet.findMany({
    select: {
      text: true,
      likes: true,
      createdAt: true,
      authorId: true,
      id: true,
      author: {
        select: {
          username: true,
        }
      }
    },
    skip: page * 1,
    take: 1,
    orderBy: {
      createdAt: "desc",
    },
  });
  return tweets;
}