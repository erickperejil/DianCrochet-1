import "../../globals.css";
import {RegisterForm} from "../components/posts/RegisterForm";
import LoginBG from "../components/backgrounds/LoginBackGround";
import Header from "components/Header";


export default function Login() {



  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <Header/>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
          <RegisterForm/>
        <LoginBG/>
      </section>
    </main>
  );
}
