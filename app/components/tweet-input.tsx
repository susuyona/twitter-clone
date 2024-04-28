"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import Input from "@/app/components/input";
import Button from "@/app/components/button";
import { uploadTweet } from "@/actions";
import { TWEET_MAX_LENGTH } from "@/lib/constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const tweetSchema = z.object({
  text: z.string({
    required_error: "Text is required",
  }).max(TWEET_MAX_LENGTH),
});

type TweetType = z.infer<typeof tweetSchema>;

export default function TweetInput() {
  const { register, handleSubmit } = useForm<TweetType>({
    resolver: zodResolver(tweetSchema),
  });

  const onSubmit = async (data: TweetType) => {
    const formData = new FormData();
    formData.append('text', data.text);
    try {
      await uploadTweet(null, formData);
    } catch (error) {
      console.error('Failed to upload tweet:', error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("text")}
          type="text"
          placeholder="What do you want to chirp?"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}