"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import getSession from "./lib/session";
import { tweetSchema } from "./app/components/tweet-input";

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function uploadTweet(_: any, formData: FormData) {
  const data = {
    text:formData.get("text")
  }
  const result = tweetSchema.parse(data);
  if (result) {
    const session = await getSession();
    if (session.id) {
      const tweet = await db.tweet.create({
        data: {
          text: result.text,
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
      redirect(`/`);
    }
  }
}