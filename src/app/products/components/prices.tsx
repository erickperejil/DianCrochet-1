'use client'
import { ChangeEvent, useEffect, useRef} from "react";

interface PricesProps {
  open: boolean; // Añadir `open` como prop
  setOpen: (value: boolean) => void; // Añadir `setOpen` como prop
  minPrice: number;
  maxPrice: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
}

export default function Prices({
  open,
  setOpen,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: PricesProps) {
  const ref = useRef<HTMLDivElement>(null);


  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false); // Cierra el componente si se hace clic fuera
    }
  };

  // Manejo de eventos de clic para cerrar el componente al hacer clic fuera
  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);



  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (/^\d*\.?\d*$/.test(value)) {
      
      if (name == "max_price") {
        setMaxPrice(Number(value)); // Actualizar el valor de maxPrice
        if(Number(value)>99999){
          setMaxPrice(0)
        }
      }
  
      if (name == "min_price") {
        setMinPrice(Number(value)); 
        if(Number(value)>99999){
          setMinPrice(0)
        }// Actualizar el valor de minPrice
      }

    }
  };

  const handlePricesRanges = () => {
    if(minPrice>maxPrice){
      setMaxPrice(0)
    }
  }


  return open ? (
    <div
    ref={ref} // Referencia al div principal} // Para que el div pueda recibir foco
    className="z-30 absolute select-none flex h-full w-full rounded-lg bg-slate-50 shadow-lg shadow-[#0000004D]">
      <div className="flex h-full w-1/2">
        <div className="flex h-full w-1/3 items-center justify-center">
          <h2 className="select-none font-lekton">Min</h2>
        </div>
        <div className="flex h-full w-2/3 items-center justify-start">
          <div className="flex h-2/5 w-11/12 rounded-xl border border-slate-700">
            <input
              className="h-full w-9/12 rounded-lg border-none bg-transparent focus:ring-transparent"
              type="text"
              id="min_price"
              name="min_price"
              value={minPrice !== null ? minPrice : ""}
              onChange={HandleChange}
              placeholder={`${minPrice}`}
              inputMode="numeric"
              autoComplete="off"
              onBlur={handlePricesRanges}
            />
            <div className=" select-none flex h-full w-3/12 justify-center rounded-lg font-lekton">
              $
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/2">
        <div className="flex h-full w-1/3 items-center justify-center">
          <h2 className="font-lekton select-none">Max</h2>
        </div>
        <div className="flex h-full w-2/3 items-center justify-start">
          <div className="flex h-2/5 w-11/12 rounded-xl border border-slate-700">
            <input
              className=" h-full w-9/12 rounded-lg border-none bg-transparent focus:ring-transparent"
              type="text"
              id="max_price"
              name="max_price"
              value={maxPrice !== null ? maxPrice : ""}
              onChange={HandleChange}
              placeholder={`${maxPrice}`}
              inputMode="numeric"
              autoComplete="off"
              onBlur={handlePricesRanges}
            />
            <div className="select-none flex h-full w-3/12 justify-center rounded-lg font-lekton">
              $
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
