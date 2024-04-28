import { logout } from "@/actions"
import Button from "./button";

export default function Header() {
  return (
    <div className="flex flex-row justify-end gap-40">
      <h1>🕊️</h1>
      <form action={logout} className="flex flex-row">
        <Button text="Logout" />
      </form>
    </div>
  );
}
