import { logout } from "@/actions"
import Link from "next/link";
import Button from "./button";

export default function Header() {

  return (
    <div className="flex flex-row justify-between">
      <h1>
        <Link href="/">🕊️</Link>
      </h1>
      <form action={logout} className="flex flex-row">
        <Button text="Logout" />
      </form>
    </div>
  );
}
