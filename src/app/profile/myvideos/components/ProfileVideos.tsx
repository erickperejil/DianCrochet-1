"use client";
import { useState } from "react";
import OrdenamientoVideos from "./Ordenamiento";
import Video from "./Video";
export default function MyVideos() {
  const [showOrder, setShowOrder] = useState(false);
  const [, setOrdenamiento] = useState("");
  const [, setOrden] = useState("");

  const handleOrder = () => {
    setShowOrder(!showOrder);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-20 flex h-24 select-none items-center pl-[5%]">
        <h1 className="font-koulen text-2xl text-[#424242]">MIS VIDEOS</h1>
        <div className="absolute right-[5%] ml-6 flex cursor-pointer select-none items-center font-lekton text-lg text-[#444343]">
          <h2 onClick={handleOrder}>Ordenar por:</h2>
          <svg
            onClick={handleOrder}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.1}
            stroke="currentColor"
            className={`size-5 transition-all duration-300 ease-linear ${showOrder ? "rotate-180 transform" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <div className="absolute right-[2.5%] top-7 w-[180%]">
            <OrdenamientoVideos
              open={showOrder}
              setOpen={setShowOrder}
              setOrdenamiento={setOrdenamiento}
              setAscendente={setOrden}
            />
          </div>
        </div>
      </div>
      <section className="px-[5%] flex-1 overflow-y-auto grid select-none grid-cols-3 gap-3">
        <div className="h-[203px] w-[270px]">
            <Video
            nombre={"Titulo del Video a mostrar"}
            dificultad={"2/5"}
            imagen={"https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"}
            />
        </div>

        <div className="h-[203px] w-[270px]">
            <Video
            nombre={"Titulo del Video a mostrar"}
            dificultad={"2/5"}
            imagen={"https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"}
            />
        </div>
        <div className="h-[203px] w-[270px]">
            <Video
            nombre={"Titulo del Video a mostrar"}
            dificultad={"2/5"}
            imagen={"https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"}
            />
        </div>
        
      </section>
    </div>
  );
}
