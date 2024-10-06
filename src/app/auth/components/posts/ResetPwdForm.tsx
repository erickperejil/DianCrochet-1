import React from "react";

export default function ResetPswForm() {
  return (
    <form className="relative z-10 h-[60.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-2xl p-6">
      <div className="flex flex-col items-center">
        <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800 mb-6">
          RESTABLECER CLAVE
        </h1>
        <h5 className="w-[70.1%] font-lekton text-l text-gray-600 font-normal mb-4">
          Ingrese una nueva clave
        </h5>
        <input
          id="pwdcontainer"
          className="w-[88.1%] h-[10.6%] rounded-2xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none mb-4"
          placeholder="contraseña"
          type="password"
        />
        <input
          id="mailcontainer"
          className="w-[88.1%] h-[10.6%] rounded-2xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none mb-6"
          placeholder="confirmar contraseña"
          type="password"
        />
        <button className="w-[56.61%] h-12 rounded-3xl bg-[#C68EFE] flex items-center justify-center">
          <h1 className="font-koulen text-2xl text-white">
            ENVIAR 
          </h1>
        </button>
      </div>
      <div className="absolute bottom-4 left-4">
        <a href="#" className="font-lekton text-l text-gray-600 hover:underline">
          Volver
        </a>
      </div>
    </form>
  );
}
