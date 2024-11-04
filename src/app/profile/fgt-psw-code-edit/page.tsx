"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PswdCodeFormEdit from "../post/PswdCodeFormEdit";

export default function PswCodeEdit() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16">
        <PswdCodeFormEdit email={email || ""} />
      </section>
    </main>
  );
}
