"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";

export default function LogIn() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-h1">Holi</h1>
        <h2 className="text-h2">Welcome back!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Button text="Login" />
      </form>
    </div>
  );
}
