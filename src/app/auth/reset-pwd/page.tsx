"use client";
import ResetPswdForm from "../components/posts/ResetPwdForm";
import LoginBG from "../components/backgrounds/LoginBackGround";
import Header from "app/landing/components/Header";

export default function ResetPsw() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <Header/>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <ResetPswdForm />
        <LoginBG />
      </section>
    </main>
  );
}
