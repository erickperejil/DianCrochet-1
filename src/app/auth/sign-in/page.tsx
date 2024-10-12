'use client'
import "../../globals.css";
import LoginForm from "../components/posts/LoginForm";
import LoginBG from "../components/backgrounds/LoginBackGround";
import Header from "components/Header";

export default function Login() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <nav className="h-[8%] w-full bg-slate-200 z-20"><Header/></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <LoginForm/>
        <LoginBG/>
      </section>
    </main>
  );
}
