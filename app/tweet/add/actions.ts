"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { tweetSchema } from "./utils";
import { redirect } from "next/navigation";

export async function uploadTweet(_: any, formData: FormData) {
  const data = {
    text:formData.get("text")
  }
  const result = tweetSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const tweet = await db.tweet.create({
        data: {
          text: result.data.text,
          author: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      redirect(`/tweet/${tweet.id}/`);
    }
  }
}