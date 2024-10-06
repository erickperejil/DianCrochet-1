import PswdCodeForm from "../components/posts/PswdCodeForm";
import LoginBG from "../components/backgrounds/LoginBackGround";

export default function PswCode(){
    return(
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <nav className="h-[8%] w-full bg-slate-200 z-20"></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
      <div className="z-20 h-[80.4%] w-[25.7%] flex justify-center items-center">
      <PswdCodeForm/>
      </div>
        <LoginBG/>
      </section>
    </main>
    );
 
}