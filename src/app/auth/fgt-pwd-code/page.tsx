"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PswdCodeForm from "../components/posts/PswdCodeForm";
import LoginBG from "../components/backgrounds/LoginBackGround";

export default function PswCode() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <nav className="h-[8%] w-full bg-slate-200 z-20"></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <PswdCodeForm email={email || ""} />
        <LoginBG />
      </section>
    </main>
  );
}
