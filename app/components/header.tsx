import { destroySession } from "@/lib/session";
import Link from "next/link";

export default function Header() {
  const handleLogout = async () => {
    "use server";
    await destroySession();
    /* try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });
      // Redirect to the home page after successful logout
      if (!response.ok) {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } */
  };

  return (
    <div className="flex flex-row justify-between">
      <h1>
        <Link href="/">🕊️</Link>
      </h1>
      <form action={handleLogout} className="flex flex-row">
        <button className="primary-btn">
          Logout
        </button>
      </form>
    </div>
  );
}
