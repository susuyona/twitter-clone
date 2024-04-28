import db from "@/lib/db";
import getSession from "@/lib/session";
import Welcome from "../components/welcome";
import TweetList from "../components/tweet-list";

export const metadata = {
  title: "Home",
};

async function GetIsLoggedIn() {
  const session = await getSession();
  if (session.id) {
    return true;
  } else return false;
}

async function getInitialTweets() {
  const tweets = await db.tweet.findMany({
    select: {
      text: true,
      likes: true,
      createdAt: true,
      authorId: true,
      id: true,
      author: {
        select: {
          username: true,
        }
      }
    },
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
  return tweets;
}

export default async function Home() {
  const initialTweets = await getInitialTweets();
  const isLoggedIn = await GetIsLoggedIn();
  return (
    <>
      {isLoggedIn ? <TweetList initialTweets={initialTweets} /> : <Welcome />}
    </>
  );
}
