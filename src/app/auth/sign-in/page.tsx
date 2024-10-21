import "../../globals.css";
import LoginForm from "../components/posts/LoginForm";
import LoginBG from "../components/backgrounds/LoginBackGround";
import navbar from "components/navbar";

export default function Login() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      navbar
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <LoginForm />
        <LoginBG />
      </section>
    </main>
  );
}
