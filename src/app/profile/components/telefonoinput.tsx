"use client";
import { ChangeEvent, useState } from "react";

interface PhoneNumberInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export default function TelefonoNumberInput({
  value,
  onChange,
  disabled,
}: PhoneNumberInputProps) {
  const [selected, setSelected] = useState("+504");
  const [isOpen, setIsOpen] = useState(false);

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
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
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

  const handleSelect = (optionName: string) => {
    setSelected(optionName);
    setIsOpen(false);
  };

  return (
    <div className="flex h-full w-[88.1%] items-center">
      {/* Selector de código de país */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex h-full w-1/4 flex-shrink-0 cursor-pointer items-center rounded-l border border-[#D1D3D4] bg-[#F8F8F8] py-[11px] px-3 text-left text-gray-600 focus:outline-none focus:ring focus:ring-opacity-50"
      >
        {options.find((option) => option.name === selected)?.flag}
        <span className="ml-2 font-medium text-gray-600">{selected}</span>
        <span className="ml-1">&#x25BC;</span>
        {isOpen && (
          <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option.name}
                onClick={() => handleSelect(option.name)}
                className="flex cursor-pointer items-center py-2 px-3 hover:bg-gray-100"
              >
                {option.flag}
                <span className="ml-2 text-gray-700">{option.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input para número de teléfono */}
      <input
        type="text"
        className="flex-1 h-full border border-[#D1D3D4] rounded-r bg-[#F8F8F8] px-3 text-sm text-gray-600 focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
        value={value} // Utiliza el valor desde las propiedades
        onChange={onChange} // Utiliza la función de cambio desde las propiedades
        placeholder="Número de teléfono"
        disabled={disabled}
      />
    </div>
  );
}
