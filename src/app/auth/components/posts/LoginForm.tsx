"use client";
import { loginData } from "@interfaces/user";
import { login } from "@services/UserAuth/user";
import React, { ChangeEvent, FormEvent, useState } from "react";
import LoadingPage from "../animation/LoadingPage";
import CodeRegister from "./CodeRegister";

// import login from '@services/UserAuth/login';

export default function LoginForm() {
  const [formData, setFormData] = useState<loginData>({
    correo: "",
    contrasena: "",
  });
  const [loading, setLoading] = useState(false);
  const [codigo, setCodigo] = useState(0);
  const [message, setMessage] = useState("")

  // Maneja los cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aqui se hace la transaccion beebboop
    setLoading(true);
    try {
      // Realiza una petición POST con los datos del formulario
      const response = await login(formData);
      setMessage(response.mensaje)
      if (response.codigo == 1) {
        console.log("Login exitoso:", response);
        setCodigo(1)
        //beep boop, aqui se implementa el cambio cuando se hace login
      } else if (response.codigo == 2) {
        setCodigo(2);
        console.log(response.mensaje);
      } else if (response.codigo == 3) {
        setCodigo(3);
      }
      else if (response.codigo == 4) {
        setCodigo(4);
        //aqui hay que redirigir al codeRegister
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 h-[78.4%] w-[25.7%] rounded-3xl opacity-90 ">
      {loading && (
        <div className="absolute z-50 flex h-full w-full items-center justify-center">
          <LoadingPage />
        </div>
      )}

      {(codigo==4)?(
        <CodeRegister mail={formData.correo} />
      ):
      ( <form
        onSubmit={handleSubmit}
        className="relative z-10 h-full w-full rounded-3xl bg-white opacity-90 shadow-2xl"
      >
        <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
          <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
            INICIAR SESION
          </h1>
        </div>
        <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center">
          {codigo == 2 ? (
            <input
              id="mailcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-red-600 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-red-500 focus:outline-none"
              placeholder="correo no existe"
              type="text"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          ) : (
            <input
              id="mailcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
              placeholder="correo"
              type="text"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          )}
        </div>
        <div className="absolute top-[39.5%] flex h-[10.6%] w-full justify-center">
          {codigo == 3 ? (
            <input
              id="passwordcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-red-600 bg-white pl-3 pr-3 font-lekton text-xl tracking-tighter text-gray-900 shadow-lg placeholder:font-lekton placeholder:text-base placeholder:tracking-normal placeholder:text-red-500 focus:outline-none"
              placeholder="contraseña incorrecta"
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          ) : (
            <input
              id="passwordcontainer"
              className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-xl tracking-tighter text-gray-900 shadow-lg placeholder:font-lekton placeholder:text-base placeholder:tracking-normal placeholder:text-gray-400 focus:outline-none"
              placeholder="contraseña"
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          )}
        </div>
        <div className="absolute top-[53.57%] flex h-[3%] w-full justify-center">
          <h1 className="font-lekton text-base text-[#535353] underline decoration-slate-900">
            ¿Olvidaste tu contraseña?
          </h1>
        </div>

          {(codigo==2 || codigo==3) ? (
                    <div className="absolute top-[17.57%] flex h-[3%] w-full pl-[7%]">
                    <h1 className="font-lekton text-base text-red-600 underline decoration-red-700-900 pointer-events-none select-none">
                      {message}
                    </h1>
                  </div>
          ) : ("")}

        <div className="absolute top-[69.34%] flex h-[10.19%] w-full justify-center">
          <button
            type="submit"
            className="absolute flex h-full w-[56.61%] items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]"
          >
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
      </form>)}

    </div>
  );
}
