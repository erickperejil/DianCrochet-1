"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { register } from "@services/UserAuth/user";
import { RegisterData } from "@interfaces/user";
import CodeRegister from "./CodeRegister";
import PhoneNumberInput from "../inputs/PhoneNumberInput";
import LoadingPage from "../animation/LoadingPage";
import Link from "next/link";
import Modal from "../modals/Modal";

export function RegisterForm() {
  const [showForm, setShowForm] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    nombre: "",
    telefono: "",
    apellido: "",
    genero: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
  });
  const [Password2, SetPassword2] = useState("");


  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(0);

  const [loading, setLoading] = useState(false);

  const[passwordvalidation, setPasswordValidation] = useState(false);

  const formHandler = () => {
      setShowForm(!showForm);
  };


  const handlePasswordVerification = () =>{
    console.log(formData.contrasena, "  =  ", Password2)
    return formData.contrasena === Password2;
  }


  const handlePhoneNumberChange = (phone: { numero: string }) => {
    // Actualiza el estado con el número de teléfono
    setFormData((prevData) => ({ ...prevData, telefono: phone.numero }));
  };

  const handleSubmit1 = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formHandler();// Inicia el estado de carga

  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!handlePasswordVerification()) {
      setPasswordValidation(true);
      return; // Detener el flujo si las contraseñas no coinciden
    }
    if(handlePasswordVerification()){
      setPasswordValidation(false);
    }
    if(formData.fechaNacimiento === ""){
      formData.fechaNacimiento = "1620-10-24"
    }
    setLoading(true);
    console.log(formData) // Inicia el estado de carga
    try {
      const response = await register(formData);
      console.log('respuesta: ', response);


      if (response.user.codigo == 1) {
        console.log("Registro exitoso:", response);
        setShowEmailVerification(!showEmailVerification);
      }
      else{
        setShowModal(true);
        setModalTitle("");
        setModalMessage(response.user.mensaje);
        setModalType(2);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if(name === "contrasena2"){
      SetPassword2(value)
    }

  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative z-20 h-[80.4%] w-[25.7%] flex items-center justify-center">
      {loading && (
        <div className="absolute z-50 flex h-full w-full items-center justify-center">
          <LoadingPage />
        </div>
      )}
      {showEmailVerification ? (
        // Contenido que deseas mostrar cuando `loading` es false
        <div  className="z-10 h-full w-full">
          <form
            onSubmit={handleSubmit1}
            className={`z-10 relative h-full w-full rounded-3xl bg-white opacity-90 shadow-2xl ${
              showForm ? "hidden" : ""
            }`}
          >
            <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
              <h1 className="w-[88.1%] select-none font-koulen text-3xl text-gray-800">
                CREAR CUENTA
              </h1>
            </div>
            <label
              className="absolute top-[18.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
              className="absolute top-[34.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
                required
              />
            </div>

            <label
              className="absolute top-[50.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
              className="absolute top-[66.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
                  value={formData.genero} 
                >
                  <option
                    value=""
                    className="font-lekton"
                    disabled
                    hidden
                  ></option>
                  <option value="M" className="font-lekton">
                    Masculino
                  </option>
                  <option value="F" className="font-lekton">
                    Femenino
                  </option>
                  <option value="O" className="font-lekton">
                    Otro
                  </option>
                </select>
              </div>
            </div>

            <div className="absolute bottom-2 flex h-[10.19%] w-full justify-center">
              <button
                type = "submit"
                className="absolute right-2 flex h-full w-1/2 items-center justify-center rounded-3xl bg-[#C68EFE] pt-[1%]"
              >
                <h1 className="w-[88.1%] select-none text-center font-koulen text-2xl text-white">
                  SIGUIENTE
                </h1>
              </button>
            </div>

            <div className="absolute bottom-14 flex h-[6.1%] w-[100%] flex-col items-start pl-[6%]">
              <h1 className="select-none font-lekton text-sm text-[#535353]">
                ¿Ya tienes una cuenta?{" "}
              </h1>
              <h1 className="mt-[-2%] select-none text-center font-lekton text-sm text-[#535353] underline decoration-slate-900">
              <Link href="/auth/sign-in">Inicia Sesion</Link>
              </h1>
            </div>
          </form>

          <form
            onSubmit={handleSubmit}
            className={`z-10 relative h-full w-full rounded-3xl bg-white opacity-90 shadow-2xl ${
              showForm ? "" : "hidden"
            }`}
          >
            <div className="absolute top-[5.3%] flex h-[12.5%] w-full items-center justify-center">
              <h1 className="w-[88.1%] font-koulen text-3xl text-gray-800">
                CREAR CUENTA
              </h1>
            </div>

            <label
              className="absolute top-[18.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
              htmlFor="telefono"
            >
              telefono
            </label>
            <div className="absolute top-[23.3%] flex h-[7.6%] w-full justify-center">
              <PhoneNumberInput onPhoneNumberChange={handlePhoneNumberChange} />
            </div>

            <label
              className="absolute top-[34.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
                required
              />
            </div>

            <label
              className="absolute top-[50.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
                required
              />
            </div>

            <label
              className="absolute top-[66.4%] h-[4.9%] w-full select-none pl-[6%] font-lekton text-gray-500"
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
                value={Password2}
                onChange={handleChange}
                name="contrasena2"
                autoComplete="off"
                required
              />
            </div>

            {passwordvalidation ? (<div className="absolute top-[79.3%] flex h-[7.6%] w-full pl-[6%] items-center">
                <h1 className="mt-[-2%] font-lekton text-base text-red-600 underline decoration-red-800">
                  Contraseña incorrecta
                </h1>
            </div>):("")}

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
          </form>
        </div>
      ) : (
        // Componente que se renderiza cuando `showEmailVerification` es false
        <CodeRegister 
        mail={formData.correo}
        setShowEmailVerification={setShowEmailVerification}
         />
      )}

      {showModal ? (
                  <Modal
                  title={modalTitle}
                  message={modalMessage}
                  type={modalType}
                  open={showModal}
                  setOpen={setShowModal}
                />
      ) : ("")
      }

    </div>
  );
}
