'use client'
import { ChangeEvent, useRef} from "react";

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
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Si el desenfoque es fuera del contenedor, cerramos el componente
    if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  };



  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (/^\d*\.?\d*$/.test(value)) {
      
      if (name == "max_price") {
        setMaxPrice(Number(value)); // Actualizar el valor de maxPrice
      }
  
      if (name == "min_price") {
        setMinPrice(Number(value)); // Actualizar el valor de minPrice
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
    ref={ref} // Referencia al div principal
    tabIndex={-1} // Para que el div pueda recibir foco
    onBlur={handleBlur} 
    className="select-none flex h-full w-full rounded-lg bg-slate-50 shadow-lg shadow-[#0000004D]">
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
