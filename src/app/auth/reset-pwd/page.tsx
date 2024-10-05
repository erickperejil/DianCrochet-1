import ResetPswdForm from "../components/posts/ResetPwdForm";
import LoginBG from "../components/backgrounds/LoginBackGround";

export default function ResetPsw(){
    return(
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <nav className="h-[8%] w-full bg-slate-200 z-20"></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
      < ResetPswdForm/>
        <LoginBG/>
      </section>
    </main>
    );
 
}