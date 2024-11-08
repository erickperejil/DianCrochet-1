"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import PswdCodeFormEdit from "../post/PswdCodeFormEdit";

function EmailParamsComponent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return <PswdCodeFormEdit email={email || ""} />;
}

export default function PswCodeEdit() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16">
        <Suspense fallback={<div>Cargando...</div>}>
          <EmailParamsComponent />
        </Suspense>
      </section>
    </main>
  );
}
