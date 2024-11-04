import React from "react";
import Image from "next/legacy/image";

export default function LoginBG() {
  return (
    <div className="imagen absolute bottom-0 h-full w-full">
      <div className="sombra absolute bottom-0 h-[60%] w-full"></div>
      <div className="sombra absolute top-0 h-[60%] w-full rotate-180"></div>
      <Image
        src="/img/CrochetTree.png"
        alt="Background Image"
        width={500}
        height={300}
        className="absolute pointer-events-none bottom-1 right-0 mix-blend-multiply"
        style={{ width: 'auto', height: '100%' }}
      />

      <Image
        src="/img/Frog.png"
        alt="Background Image"
        width={110}
        height={67}
        className="absolute pointer-events-none left-7 top-0 opacity-90 mix-blend-multiply"
        style={{ width: 'auto', height: 'auto' }}
      />

      <Image
        src="/img/girasol.svg"
        alt="Background Image"
        width={100}
        height={100}
        className="absolute pointer-events-none bottom-48 right-[350px] scale-x-[-1] mix-blend-multiply"
      />

      <Image
        src="/img/girasol.svg"
        alt="Background Image"
        width={100}
        height={100}
        className="absolute pointer-events-none right-[300px] top-24 scale-x-[-1] mix-blend-multiply"
      />

      <Image
        src="/img/CrochetCat.jpg"
        alt="Background Image"
        width={200}
        height={200}
        className="absolute pointer-events-none bottom-2 left-28 mix-blend-multiply"
      />

      <Image
        src="/img/CrochetRooster.jpg"
        alt="Background Image"
        width={200}
        height={120}
        className="absolute pointer-events-none bottom-[-10%] left-[-58px] scale-x-[-1] mix-blend-multiply"
        style={{ width: 'auto', height: 'auto' }}
      />

      <Image
        src="/img/CrochetPumpkin.jpeg"
        alt="Background Image"
        width={385}
        height={200}
        className="absolute pointer-events-none bottom-[-50px] left-72 mix-blend-multiply object-contain"
        style={{ width: 'auto', height: '60%' }}
      />

      <Image
        src="/img/CrochetPumpkin.jpeg"
        alt="Background Image"
        width={180}
        height={140}
        className="absolute pointer-events-none left-10 top-56 scale-x-[-1] mix-blend-multiply object-contain"
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
}
