"use client";

import Button from "../../components/button";
import Input from "../../components/input";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadTweet } from "./actions";
import { tweetSchema, TweetType } from "./utils";

export default function AddTweet() {
  const [state, action] = useFormState(uploadTweet, null);
  const { register } = useForm<TweetType>({
    resolver: zodResolver(tweetSchema),
  });
  return (
    <div>
      <form action={action} className="flex flex-col justify-center">
        <Input
          {...register("text")}
          type="text"
          placeholder="What do you want to chirp?"
          required
          errors={state?.fieldErrors.text}
        />
        <Button text="Upload" />
      </form>
    </div>
  )
}