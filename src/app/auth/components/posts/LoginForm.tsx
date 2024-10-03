
import React from "react";
// import login from '@services/UserAuth/login';

export default function LoginForm(){

  return (
    <form className="relative z-10 h-[78.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-2xl">
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
      <div className="absolute top-[82%] flex h-[6.1%] w-[100%] flex-col items-center">
        <h1 className="font-lekton text-base text-[#535353]">
          ¿No tienes una cuenta?{" "}
        </h1>
        <h1 className="font-lekton text-base text-[#535353] underline decoration-slate-900">
          Regístrate aquí
        </h1>
      </div>
    </form>
  );
};

