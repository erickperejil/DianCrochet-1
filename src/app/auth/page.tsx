import "../globals.css";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <nav className="h-[8%] w-full bg-slate-200 z-20"></nav>
      <section className="imagen relative flex h-[92%] w-full items-center justify-center">
        <form className="relative z-10 h-[78.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-md">
          <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
            <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
              INICIAR SESION
            </h1>
          </div>
          <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center">
            <input
              id="mailcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
              placeholder="correo"
              type="text"
            />
          </div>
          <div className="absolute top-[39.5%] flex h-[10.6%] w-full justify-center">
            <input
              id="passwordcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-xl tracking-tighter text-gray-900 shadow-lg placeholder:font-lekton placeholder:text-base placeholder:tracking-normal placeholder:text-gray-400 focus:outline-none"
              placeholder="contraseña"
              type="password"
            />
          </div>
          <div className="absolute top-[53.57%] flex h-[3%] w-full justify-center">
            <h1 className="font-lekton text-base text-[#535353] underline decoration-slate-900">
              ¿Olvidaste tu contraseña?
            </h1>
          </div>
          <div className="absolute top-[69.34%] flex h-[10.19%] w-full justify-center">
            <button className="absolute flex h-full w-[56.61%] items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]">
              <h1 className="w-[88.1%] font-koulen text-2xl text-white">
                INICIAR SESION
              </h1>
            </button>
          </div>
          <div className="absolute left-[25%] top-[82%] flex h-[6.1%] w-[52%] flex-col items-center">
            <h1 className="font-lekton text-base text-[#535353]">
              ¿No tienes una cuenta?{" "}
            </h1>
            <h1 className="font-lekton text-base text-[#535353] underline decoration-slate-900">
              Regístrate aquí
            </h1>
          </div>
        </form>
        <div className="sombra absolute bottom-0 h-[60%] w-full"></div>
        <div className="sombra absolute top-0 h-[60%] w-full rotate-180"></div>
        <Image
          src="/img/CrochetTree.png" 
          alt="Background Image"
          width={500} 
          height={300} 
          className="absolute bottom-1 right-0 mix-blend-multiply"
        />

        <Image
          src="/img/Frog.png" 
          alt="Background Image"
          width={110} 
          height={67} 
          className="absolute bottom-[67px] right-[356px] scale-x-[-1] mix-blend-multiply rounded-tl-full"
        />

        <Image
          src="/img/girasol.svg" 
          alt="Background Image"
          width={100} 
          height={100} 
          className="absolute bottom-44 right-[410px] scale-x-[-1] mix-blend-multiply"
        />


        <Image
          src="/img/CrochetCat.jpg" 
          alt="Background Image"
          width={200} 
          height={144} 
          className="absolute bottom-2 left-28 mix-blend-multiply"
        />

        <Image
          src="/img/CrochetRooster.jpg" 
          alt="Background Image"
          width={240} 
          height={144} 
          className="absolute bottom-0 left-[-25px] mix-blend-multiply scale-x-[-1]"
        />
        
        <Image
          src="/img/CrochetPumpkin.jpeg" 
          alt="Background Image"
          width={440} 
          height={244} 
          className="absolute bottom-[-50px] left-64 mix-blend-multiply"
        />

        <Image
          src="/img/CrochetPumpkin.jpeg" 
          alt="Background Image"
          width={260} 
          height={244} 
          className="absolute top-60 left-10 mix-blend-multiply scale-x-[-1]"
        />

      </section>
    </main>
  );
}
