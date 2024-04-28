"use client";

import { useEffect, useState } from "react";
import Button from "@/app/components/button";
import Header from "@/app/components/header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTweet, toggleLike } from "./actions";
import TweetInDetail from "@/app/components/tweet-detail";
import { Tweet } from "@/lib/constants";

export default function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const [tweet, setTweet] = useState<Tweet | null>(null);

  useEffect(() => {
    const fetchTweet = () => {
      getTweet(id)
        .then((tweetData) => {
          if (!tweetData) {
            return notFound();
          } else {
            setTweet(tweetData);
          }
        })
        .catch((error) => {
          console.error("Error fetching tweet:", error);
        });
    };
    fetchTweet();
  }, []);


/* 
  const handleLike = async () => {
    await toggleLike(tweet!.id);
  }
  useEffect(() => {
    handleLike();
  }, []); */

  return (
    <>
      <Header />
      <Link href="/">
        <Button text="Back to the list" />
      </Link>
      {tweet && <TweetInDetail {...tweet} />}
    </>
  );
}
