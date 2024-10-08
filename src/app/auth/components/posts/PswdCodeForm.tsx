import React from "react";

interface PswdCodeFormProps {
  email: string;
}

export default function PswdCodeForm({ email }: PswdCodeFormProps) {
  return (
    <form className="relative z-10 h-[60.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-2xl">
      <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
        <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
          RESTABLECER CLAVE
        </h1>
      </div>
      <div className="absolute top-[23.3%] flex h-[10.6%] w-full ml-7">
        <h5 className="w-[70.1%] font-lekton text-l text-gray-600 font-normal">
          Ingrese el código
        </h5>
      </div>
      <div className="absolute top-[35%] flex h-[7.6%] w-full justify-center mt-6">
        <input
          id="mailcontainer"
          className="absolute w-[88.1%] h-12 rounded-2xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          placeholder="6-digitos"
          type="number"
        />
      </div>
      <div className="absolute bottom-[35%] left-4 pl-3">
        <h1 className="font-lekton text-sm text-[#535353] underline decoration-[#535353]">¿No recibiste ningún código?</h1>          
      </div>
      <div className="absolute bottom-[15%] flex h-[10.19%] w-full justify-center">
        <button className="absolute flex h-full w-[56.61%] items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]">
          <h1 className="w-[88.1%] font-koulen text-2xl text-white">
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
