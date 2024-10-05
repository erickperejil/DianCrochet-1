"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { register } from "@services/UserAuth/user";
import { RegisterData } from "@interfaces/user";
import EmailAuthForm from "./EmailCodeForm";

export function RegisterForm() {
  const [showForm, setShowForm] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(true);
  const [formData, setFormData] = useState<RegisterData>({
    nombre: "",
    usuario: "",
    apellido: "",
    genero: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
  });

  const formHandler = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await register(formData);
      if (response.status) {
        console.log("Registro exitoso:", response);
        setShowEmailVerification(!showEmailVerification);
      } else {
      }
    } catch (error) {
      console.log(error);
    }

    if (false) {
      setShowEmailVerification(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="z-20 h-[80.4%] w-[25.7%]">
      {showEmailVerification ? (
        <form onSubmit={handleSubmit} className="z-10 h-full w-full">
          <section
            className={`relative h-full w-full rounded-3xl bg-white opacity-90 shadow-2xl ${
              showForm ? "hidden" : ""
            }`}
          >
            <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
              <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
                CREAR CUENTA
              </h1>
            </div>
            <label
              className="absolute top-[18.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="correo"
            >
              Nombre
            </label>
            <div className="absolute top-[23.3%] flex h-[7.6%] w-full justify-center">
              <input
                id="nombre"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder=""
                value={formData.nombre}
                onChange={handleChange}
                type="text"
                name="nombre"
                autoComplete="off"
                required
              />
            </div>

            <label
              className="absolute top-[34.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="apellido"
            >
              {" "}
              Apellido
            </label>
            <div className="absolute top-[39.3%] flex h-[7.6%] w-full justify-center">
              <input
                id="apellidoInput"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder=""
                value={formData.apellido}
                onChange={handleChange}
                type="text"
                name="apellido"
                autoComplete="off"
              />
            </div>

            <label
              className="absolute top-[50.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="birth"
            >
              Fecha de nacimiento
            </label>
            <div className="absolute top-[55.3%] flex h-[7.6%] w-full pl-[6%]">
              <input
                id="birthdateInput"
                className="absolute h-full w-[44.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder=""
                onChange={handleChange}
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
              />
            </div>

            <label
              className="absolute top-[66.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="genero"
            >
              Genero
            </label>

            <div className="relative top-[71.3%] flex h-[7.6%] w-full rounded-md pl-[6%] shadow-sm">
              <input
                id="genero"
                name="genero"
                type="text"
                placeholder=""
                onChange={handleChange}
                className="absolute h-full w-[44.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400"
              />
              <div className="absolute inset-y-0 flex w-[44.1%] flex-row-reverse items-center justify-around">
                <label htmlFor="currency" className="sr-only border">
                  Genero
                </label>
                <select
                  id="currency"
                  name="genero"
                  onChange={handleSelectChange}
                  className="h-full w-full rounded-xl border-0 bg-transparent py-0 pl-2 pr-7 font-lekton text-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <option
                    value=""
                    className="font-lekton"
                    disabled
                    selected
                    hidden
                  ></option>
                  <option value="Masculino" className="font-lekton">
                    Masculino
                  </option>
                  <option value="Femenino" className="font-lekton">
                    Femenino
                  </option>
                  <option value="Otro" className="font-lekton">
                    Otro
                  </option>
                </select>
              </div>
            </div>

            <div className="absolute bottom-2 flex h-[10.19%] w-full justify-center">
              <div
                onClick={formHandler}
                className="absolute right-2 flex h-full w-1/2 items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]"
              >
                <h1 className="w-[88.1%] text-center font-koulen text-2xl text-white">
                  SIGUIENTE
                </h1>
              </div>
            </div>

            <div className="absolute bottom-14 flex h-[6.1%] w-[100%] flex-col items-start pl-[6%]">
              <h1 className="font-lekton text-sm text-[#535353]">
                ¿Ya tienes una cuenta?{" "}
              </h1>
              <h1 className="mt-[-2%] text-center font-lekton text-sm text-[#535353] underline decoration-slate-900">
                Inicia Sesion
              </h1>
            </div>
          </section>

          <section
            className={`relative h-full w-full rounded-3xl bg-white opacity-90 shadow-2xl ${
              showForm ? "" : "hidden"
            }`}
          >
            <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
              <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
                CREAR CUENTA
              </h1>
            </div>

            <label
              className="absolute top-[18.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="user"
            >
              usuario
            </label>
            <div className="absolute top-[23.3%] flex h-[7.6%] w-full justify-center">
              <input
                id="usuario"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder="josue1234"
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <label
              className="absolute top-[34.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="correo"
            >
              correo
            </label>
            <div className="absolute top-[39.3%] flex h-[7.6%] w-full justify-center">
              <input
                id="correo"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder="example@mail.com"
                value={formData.correo}
                onChange={handleChange}
                type="email"
                name="correo"
              />
            </div>

            <label
              className="absolute top-[50.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="contrasena"
            >
              Contraseña
            </label>
            <div className="absolute top-[55.3%] flex h-[7.6%] w-full pl-[6%]">
              <input
                id="contrasena"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder=""
                type="password"
                value={formData.contrasena}
                onChange={handleChange}
                name="contrasena"
                autoComplete="off"
              />
            </div>

            <label
              className="absolute top-[66.4%] h-[4.9%] w-full pl-[6%] font-lekton text-gray-500"
              htmlFor="genero"
            >
              Verifique su contraseña
            </label>
            <div className="absolute top-[71.3%] flex h-[7.6%] w-full pl-[6%]">
              <input
                id="contrasena2"
                className="absolute h-full w-[88.1%] rounded-xl border border-gray-200 bg-white pl-3 pr-3 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
                placeholder=""
                type="password"
                name="contrasena2"
                autoComplete="off"
              />
            </div>

            <div className="absolute bottom-2 flex h-[10.19%] w-full justify-center">
              <button
                type="submit"
                className="absolute right-2 z-20 flex h-full w-1/2 items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]"
              >
                <h1 className="w-[88.1%] font-koulen text-2xl text-white">
                  SIGUIENTE
                </h1>
              </button>
            </div>

            <div className="absolute bottom-5 flex h-[6.1%] w-[100%] flex-col items-start pl-[6%]">
              <h1
                onClick={formHandler}
                className="mt-[-2%] font-lekton text-base text-[#535353] underline decoration-slate-900"
              >
                Volver
              </h1>
            </div>
          </section>
        </form>
      ) : (
        <EmailAuthForm title="Crear Cuenta" />
      )}
    </div>
  );
}
