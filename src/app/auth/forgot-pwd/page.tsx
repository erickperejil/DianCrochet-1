import LoginBG from "../components/backgrounds/LoginBackGround";
import EmailAuthForm from "../components/posts/EmailCodeForm";

export default function ForgotPsw() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden bg-slate-50">
      <nav className="z-20 h-[8%] w-full bg-slate-200"></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <EmailAuthForm title="RESTABLECER CLAVE" />
        <LoginBG />
      </section>
    </main>
  );
}
