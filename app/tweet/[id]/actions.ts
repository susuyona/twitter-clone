"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import assert from "assert";

async function getFirstLikeById(tweetId: number, userId: number) {
  return await db.like.findFirst({
    where: {
      userId,
      tweetId,
    },
  });
}

export async function getTweet(id: number) {
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
  assert(tweet, "Tweet not found");
  return tweet;
}

export async function getUser() {
  const session = await getSession();

  const user = await db.user.findUnique({
    where: {
      id: session.id,
    },
  });
  assert(user, "User not found");
  return user;
}

export async function toggleLike(tweetId: number) {
  const user = await getUser();

  try {
    const like = await getFirstLikeById(tweetId, user.id);

    assert(like, "Like not found");

    await db.like.delete({
      where: {
        id: like.id,
      },
    });
    return false;
  } catch (error) {
    await db.like.create({
      data: {
        user: {
          connect: {
            id: user!.id,
          },
        },
        tweet: {
          connect: {
            id: tweetId,
          },
        },
      },
    });
    return true;
  }
}

export async function checkLikedState(tweetId: number): Promise<boolean> {
  const user = await getUser();

  const like = await getFirstLikeById(tweetId, user.id);

  return like ? true : false;
}
