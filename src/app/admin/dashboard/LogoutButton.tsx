"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

async function logout() {
  await fetch("/api/admin/logout", { method: "POST" });
}

export default function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logout();
      router.push("/admin/login");
    });
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      disabled={isPending}
      className="text-xs"
    >
      {isPending ? "Signing out…" : "Sign Out"}
    </Button>
  );
}
