"use client";
import { ChangeEvent, useState } from "react";

interface Phone {
  numero: string;
}

interface PhoneNumberInputProps {
    onPhoneNumberChange: (phone: Phone) => void; // Prop para pasar el número al padre
}

export default function PhoneNumberInput({ onPhoneNumberChange }: PhoneNumberInputProps) {
  const [selected, setSelected] = useState("+504");
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<Phone>({
    numero: "",
});

  const options = [
    {
      name: "+504",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 15"
          fill="#00BCE4"
          width="20"
          height="15"
          className="mr-2 inline-block rounded-[3px]"
        >
          <title>Bandera de Honduras</title>
          <rect width="19.6" height="14" y="0.5" fill="#fff" rx="2" />
          <rect width="19.6" height="4.67" y="0.5" fill="#00BCE4" />
          <rect width="19.6" height="4.67" y="9.83" fill="#00BCE4" />
          <g transform="scale(0.45) translate(3, 7)">
            <g id="g">
              <path
                id="s"
                d="m26 13 1.1756 3.618-3.0777-2.236h3.8042l-3.0777 2.236z"
                transform="scale(0.4)"
              />
              <use xlinkHref="#s" y="6" />
            </g>
            <use xlinkHref="#s" x="10" y="3" />
            <use xlinkHref="#g" x="20" />
          </g>
        </svg>
      ),
    },
    {
      name: "+1",
      flag: (
        <svg
          fill="none"
          aria-hidden="true"
          className="me-2 h-4 w-4"
          viewBox="0 0 20 15"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
          <mask
            id="a"
            width="20"
            height="15"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#D02F44"
              fill-rule="evenodd"
              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
              clip-rule="evenodd"
            />
            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
            <g filter="url(#filter0_d_343_121520)">
              <path
                fill="url(#paint0_linear_343_121520)"
                fill-rule="evenodd"
                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                clip-rule="evenodd"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_343_121520"
              x1=".933"
              x2=".933"
              y1="1.433"
              y2="6.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#F0F0F0" />
            </linearGradient>
            <filter
              id="filter0_d_343_121520"
              width="6.533"
              height="5.667"
              x=".933"
              y="1.433"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_343_121520"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_343_121520"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
  ];
  interface Option {
    name: string;
    flag: JSX.Element;
  }

  const handleSelect = (option: Option) => {
    setSelected(option.name);
    setIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Remover cualquier carácter no numérico
    const cleanedValue = value.replace(/\D/g, "");

    // Formatear el número con un guion
    let formattedValue = cleanedValue;
    if (cleanedValue.length >= 5) {
      formattedValue = `${cleanedValue.slice(0, 4)}-${cleanedValue.slice(4)}`;
    }

    // Actualizar el estado con el valor formateado
    setPhoneNumber((prevNumber) => ({
      ...prevNumber,
      [name]: formattedValue, // Valor formateado con el guion
    }));
    const finalNumber = `${selected} ${formattedValue}`;

    // Llama a la función de callback para enviar el número al padre
    onPhoneNumberChange({ numero: finalNumber });
  };

  return (
    <div className="flex h-full w-[88.1%] items-center">
      {/* Contenedor del dropdown */}
      <div
        id="dropdown-phone-button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex h-full w-1/4 flex-shrink-0 cursor-pointer items-center rounded-s-lg border border-gray-100 px-1 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-4"
      >
        {/* Botón de selección */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center font-lekton">
            {/* Mostrar la bandera del país seleccionado */}
            {options.find((option) => option.name === selected)?.flag}
            <span>{selected}</span>
          </div>
          {/* Flecha hacia abajo */}
          <svg
            className={`ms-2.5 h-2.5 w-2.5 transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>

        {/* Dropdown que aparece cuando se selecciona el contenedor */}
        {isOpen && (
          <div
            id="dropdown-phone"
            className="absolute left-0 top-9 z-10 w-full divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {options.map((option, index) => (
                <li key={index} className="">
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="inline-flex w-full items-center px-1 py-2 font-lekton text-sm text-gray-700 hover:bg-gray-50 hover:shadow-lg"
                    role="menuitem"
                  >
                    <span className="inline-flex items-center">
                      {/* Mostrar la bandera en la lista de opciones */}
                      {option.flag}
                      {option.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Campo de entrada de número telefónico */}
      <label
        htmlFor="numero"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number:
      </label>
      <div className="relative h-full w-full">
        <input
          type="text"
          id="numero"
          className="z-20 block h-full w-full rounded-e-lg rounded-r-xl border border-s-0 border-gray-200 bg-white p-2.5 font-lekton text-gray-800 shadow-lg placeholder:font-lekton placeholder:text-gray-400 focus:outline-none"
          pattern="(\d{4}-\d{4}|\d{8})"
          placeholder="1234-5678"
          autoComplete="off"
          name="numero"
          onChange={handleChange}
          value={phoneNumber.numero}
        />
      </div>
    </div>
  );
}
