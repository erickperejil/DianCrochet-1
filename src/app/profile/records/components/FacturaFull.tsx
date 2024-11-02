import { FullBill } from "@interfaces/bill";
import { getFacturaFull } from "@services/bills";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../../../checkout/components/loadding/LoadingSpinner";

interface FacturaProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  idFactura: number;
}

export default function FacturaFull({ open, setOpen, idFactura}: FacturaProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [factura, setFactura] = useState<FullBill[]>([])
  useEffect(() => {
    async function fetchGets() {
      try {
        const res = await getFacturaFull(idFactura); // Llama a la función para obtener los facturas
        setFactura(res.DetalleProducto);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al traer facturas:", error);
      }
    }
    fetchGets();
  }, [idFactura]);


  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false); // Cierra el componente si se hace clic fuera
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false); // Cierra el componente al hacer clic en la X
  };

  return (
    <div className="absolute left-0 top-0 h-screen w-screen bg-[#19181877]">
        {isLoading?(
          <div ref={ref} className="z-20 flex flex-col absolute bottom-0 w-[37%] left-[31.5%] h-5/6 bg-slate-50">
            <LoadingSpinner/> 
          </div>
        ):(
          <div ref={ref} className="z-20 flex flex-col absolute bottom-0 w-[37%] left-[31.5%] h-5/6 bg-slate-50">
          <div className="pl-5 pr-2 pt-2 w-full h-10 flex flex-row-reverse">
              <svg
              onClick={handleClose} // Añade el evento de clic aquí
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-7 text-slate-900 cursor-pointer" // Añade cursor-pointer para indicar que es clickeable
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
          </div>
  
          <div className="select-none pl-5 pr-7 w-full h-16 flex items-center justify-between">
              <h2 className="font-koulen text-2xl text-[#424242]">Compra #{factura[0].codigo_fact}</h2>
              <div className="flex">
              <h3 className="font-roboto text-[#353535]">{factura[0].fecha_fact}</h3>
              <h3 className="font-roboto text-[#353535] ml-4">00:00</h3>
              </div>
          </div>
  
          <div className="pl-5 pr-7 w-full overflow-y-auto">
            {factura.map(((bill, index)=>
              <div key={index} className="w-full flex items-center">
              <h3 className="font-robotoMono text-[#727171]">{bill.nombre_prod}</h3>
              <div className="flex-grow border-t-2 border-dashed border-[#bdbdbd] mx-2" />
              <h3 className="font-robotoMono text-[#727171]">{bill.precio_prod}LPS</h3>
              </div>
            ))}
          </div>
  
            <div className="pl-5 pr-7 w-full h-20 bottom-0 flex flex-row-reverse mt-auto">
                <h2 className="font-roboto text-3xl text-[#353535]">Total {factura[0].total}Lps</h2>
            </div>
  
          </div>
        )}

    </div>
  );
}
