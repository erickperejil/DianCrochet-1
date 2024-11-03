"use client";
import Navbar from "components/navbar";
import LoginBG from "../components/backgrounds/LoginBackGround";
import EmailAuthFormChangePSW from "../components/posts/EmailCodeFormChangepsw";



export default function ResetPsw() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden bg-slate-50">
      <Navbar/>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16">
        <div className="z-20 flex h-[80.4%] w-[25.7%] items-center justify-center">
          <EmailAuthFormChangePSW title="CAMBIAR CLAVE" />
        </div>
        <LoginBG />
      </section>
    </main>
  );
}
