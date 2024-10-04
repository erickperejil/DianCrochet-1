import React from "react";

export default function ForgotPswForm() {
  return (
    <form className="relative z-10 h-[60.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-2xl">
      <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
        <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
          RECUPERAR CONTRASEÑA
        </h1>
      </div>
      <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center">
        <h5 className="w-[70.1%] font-lekton text-l text-gray-800 font-normal">
          Ingresa tu correo y te enviaremos un código de verificacion
        </h5>
      </div>
      <div className="absolute top-[35%] flex h-[10.6%] w-full justify-center mt-4">
        <input
          id="mailcontainer"
          className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          placeholder="correo"
          type="text"
        />
      </div>
      <div className="absolute top-[69.34%] flex h-[10.19%] w-full justify-center">
        <button className="absolute flex h-full w-[56.61%] items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]">
          <h1 className="w-[88.1%] font-koulen text-2xl text-white">
            ENVIAR
          </h1>
        </button>
      </div>
    </form>
  );
}
