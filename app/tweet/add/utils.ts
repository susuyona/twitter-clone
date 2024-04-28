import { TWEET_MAX_LENGTH } from "@/lib/constants";
import { z } from "zod";

export const tweetSchema = z.object({
  text: z.string({
    required_error: "Text is required",
  }).max(TWEET_MAX_LENGTH),
});

export type TweetType = z.infer<typeof tweetSchema>;