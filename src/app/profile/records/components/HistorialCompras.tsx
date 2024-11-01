'use client'
import { useState } from "react";
import Factura from "./Factura";
import OrdenamientoFacturas from "./Ordenamiento";
import FacturaFull from "./FacturaFull";

export default function Historial(){
    const [showOrder, setShowOrder] = useState(false);
    const [, setOrdenamiento] = useState("");
    const [, setOrden] = useState("");
    const [openFactura, setOpenFactura] = useState(false)

    const handleOrder = () => {
        setShowOrder(!showOrder);
    };

    const handleOpenBill = () => {
      setOpenFactura(!openFactura)
    }

    return(
        <div className="h-full w-full flex flex-col">
            <div className="pl-[5%] mt-20 h-24 flex items-center select-none">
                <h1 className="font-koulen text-2xl text-[#424242]">HISTORIAL DE COMPRAS</h1>
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
                <OrdenamientoFacturas
                  open={showOrder}
                  setOpen={setShowOrder}
                  setOrdenamiento={setOrdenamiento}
                  setAscendente={setOrden}
                />
              </div>
            </div>
            </div>
            <section className="overflow-y-auto flex-1">
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>
                <div onClick={handleOpenBill} className="w-9/12 h-28 ml-[5%] my-3">
                    <Factura/>
                </div>

            </section>

            {openFactura&&(
              
              <FacturaFull
                open={openFactura}
                setOpen={setOpenFactura}
                idFactura={1}
              />
            )}

        </div>
    )
}