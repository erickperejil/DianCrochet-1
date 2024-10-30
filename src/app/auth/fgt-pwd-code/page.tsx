"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PswdCodeForm from "../components/posts/PswdCodeForm";
import LoginBG from "../components/backgrounds/LoginBackGround";
import Header from "components/Header";

export default function PswCode() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <Header />
      <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16">
        <PswdCodeForm email={email || ""} />
        <LoginBG />
      </section>
    </main>
  );
}
