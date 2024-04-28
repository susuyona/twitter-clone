"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";

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
  return tweet;
}

export async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
}

export async function toggleLike(tweetId: number) {
  const user = await getUser();
  const like = await db.like.findFirst({
    where: {
      userId: user!.id,
      tweetId: tweetId,
    },
  });

  if (like) {
    await db.like.delete({
      where: {
        id: like.id,
      },
    });
  } else {
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
  }
}

export async function checkLikedState(tweetId: number): Promise<boolean> {
  const user = await getUser();

  const like = await db.like.findFirst({
    where: {
      userId: user!.id,
      tweetId: tweetId,
    },
  });

  return !!like;
}