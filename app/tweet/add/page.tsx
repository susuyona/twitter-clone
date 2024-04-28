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
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto gap-5 m-5">
      <form action={action} className="flex flex-col items-center justify-center">
        <Input
          {...register("text")}
          type="text"
          placeholder="Say hello!"
          required
          errors={state?.fieldErrors.text}
          className="p-5 h-20 rounded-xl mb-2"
        />
        <Button text="Upload" />
      </form>
    </div>
  )
}