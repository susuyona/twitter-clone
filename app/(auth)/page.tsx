import Link from "next/link";

export const metadata = {
  title: "Home",
};

//check login - logged in? Tweet list
// if not? 


export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-5">
      <div className="my-auto flex flex-col items-center gap-2">
        <span>🕊️</span>
        <h1>Piopio</h1>
        <h2>Welcome to Piopio</h2>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <Link href="/create-account">Join</Link>
        <div className="flex gap-2">
          <span>Already have an account? </span>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
