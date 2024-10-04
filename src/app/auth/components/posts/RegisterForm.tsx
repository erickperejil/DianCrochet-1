
import React from "react";
// import login from '@services/UserAuth/login';

export default function RegisterForm(){

  return (
    <form className="relative z-10 h-[78.4%] w-[25.7%] rounded-3xl bg-white opacity-90 shadow-2xl">
      <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
        <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
          CREAR CUENTA
        </h1>
      </div>
      <label className="h-[4.9%] w-full text-gray-500 font-lekton top-[18.4%] absolute pl-[6%]" htmlFor="correo">Nombre</label>
      <div className="absolute top-[23.3%] flex h-[7.6%] w-full justify-center ">
        <input
          id="nameInput"
          className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          placeholder=""
          type="text"
          name="name"
        />
      </div>

      <label className="h-[4.9%] w-full text-gray-500 font-lekton top-[32.4%] absolute pl-[6%]" htmlFor="apellido"> Apellido</label>
      <div className="absolute top-[37.3%] flex h-[7.6%] w-full justify-center ">
        <input
          id="apellidoInput"
          className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          placeholder=""
          type="text"
          name="apellido"
        />
      </div>

      <label className="h-[4.9%] w-full text-gray-500 font-lekton top-[46.4%] absolute pl-[6%]" htmlFor="birth">Fecha de nacimiento</label>
      <div className="absolute top-[51.3%] flex h-[7.6%] w-full pl-[6%]">
        <input
          id="birthdateInput"
          className="absolute h-full w-[44.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          placeholder=""
          type="date"
          name="birth"
        />
      </div>

      <label className="h-[4.9%] w-full text-gray-500 font-lekton top-[60.4%] absolute pl-[6%]" htmlFor="genero">Genero</label>

      <div className="relative rounded-md shadow-sm top-[65.3%] flex h-[7.6%] w-full pl-[6%]">
        <input
          id="genero"
          name="genero"
          type="text"
          placeholder=""
          className="absolute h-full w-[44.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 "
        />
        <div className="absolute w-[44.1%] inset-y-0 flex items-center flex-row-reverse justify-around">
          <label htmlFor="currency" className="sr-only border">
            Genero
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full w-full rounded-xl border-0 bg-transparent py-0 pl-2 pr-7 text-gray-700  font-lekton focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <option value="" className="font-lekton" disabled selected hidden></option>
            <option value="masculino" className="font-lekton">Masculino</option>
            <option value="femenino" className="font-lekton">Femenino</option>
            <option value="otro" className="font-lekton">Otro</option>
          </select>
        </div>
      </div>





      <div className="absolute bottom-2 flex h-[10.19%] w-full justify-center">
        <button className="absolute flex h-full w-1/2 right-2 items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]">
          <h1 className="w-[88.1%] font-koulen text-2xl text-white">
            SIGUIENTE
          </h1>
        </button>
      </div>

      <div className="absolute top-[76%] flex h-[6.1%] w-[100%] flex-col items-start pl-[6%]">
        <h1 className="font-lekton text-base text-[#535353]">
          ¿Ya tienes una cuenta?{" "}
        </h1>
        <h1 className="font-lekton text-base text-[#535353] underline decoration-slate-900 mt-[-2%]">
          Inicia Sesion aquí
        </h1>
      </div>
    </form>
  );
};

