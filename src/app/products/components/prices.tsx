import { useRef } from "react";

interface PricesProps {
  open: boolean; // Añadir `open` como prop
  setOpen: (value: boolean) => void; // Añadir `setOpen` como prop
}

export default function Prices({ open, setOpen }: PricesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Si el desenfoque es fuera del contenedor, cerramos el componente
    if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  };

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
              name=""
              id=""
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
              className="h-full w-9/12 rounded-lg border-none bg-transparent focus:ring-transparent"
              type="text"
              name=""
              id=""
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
