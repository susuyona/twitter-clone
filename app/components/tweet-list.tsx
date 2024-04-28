"use client";

import { useEffect, useRef, useState } from "react";
import TweetInList from "./tweet-in-list";
import { getMoreTweets } from "../(home)/actions";
import { Tweet } from "@/lib/constants";

interface TweetListProps {
  initialTweets: Tweet[];
}

export default function TweetList({ initialTweets }: TweetListProps) {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          setIsLoading(true);
          const nextTweets = await getMoreTweets(page + 1);
          if (nextTweets.length !== 0) {
            setPage((prev) => prev + 1);
            setTweets((prev) => [
              ...prev,
              ...nextTweets.map((tweet) => ({
                ...tweet,
                author: { username: tweet.author.username },
              })),
            ]);
          } else {
            setIsLastPage(true);
          }
          setIsLoading(false);
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetInList key={tweet.id} {...tweet} />
      ))}
      {isLastPage && (
        <span ref={trigger}> {isLoading ? "Loading..." : "Load more"}</span>
      )}
    </div>
  );
}
