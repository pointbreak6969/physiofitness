"use client";

import { useActionState } from "react";
import { adminLogin, type LoginState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initial: LoginState = { status: "idle" };

export default function LoginForm() {
  const [state, action, isPending] = useActionState(adminLogin, initial);

  return (
    <Card className="w-full shadow-xl border-0 ring-1 ring-border/60">
      <CardHeader className="space-y-1 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-brand-blue grid place-items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Physiofitness</span>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">Admin Portal</CardTitle>
        <CardDescription>Sign in to access the dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>

          {state.status === "error" && (
            <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
              {state.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white mt-2"
          >
            {isPending ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
