import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface SessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "melodious-piopio",
    password: process.env.COOKIE_PASSWORD!,
  });
}

export async function destroySession(): Promise<void> {
  const session = await getSession();
  if (session) {
    await session.destroy();
    redirect("/");
  }
}
