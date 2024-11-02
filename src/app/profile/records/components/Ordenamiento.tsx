'use client';
import { useRef, useEffect } from "react";

interface OrderProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setOrdenamiento: (value: string) => void;
  setAscendente: (value: string) => void;
}

export default function OrdenamientoFacturas({ open, setOpen, setOrdenamiento, setAscendente }: OrderProps) {
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

  const handleSelection = (id: number) => {
    setOpen(false);
    switch (id) {
      case 1:
        setOrdenamiento("FECHA_FACT")
        setAscendente("desc")
        break;
      case 2:
        setOrdenamiento("FECHA_FACT")
        setAscendente("asc")
        break;
      default:
        // 
}
}

  return (
    open ? (
      <div
        ref={ref}
        className="z-30 select-none absolute flex w-full flex-col py-2 rounded-lg bg-slate-50 shadow-2xl shadow-slate-900 drop-shadow-lg"
      >
          <div onClick={()=>handleSelection(1)} className="mb-[2px] flex items-center hover:bg-blue-500 hover:text-slate-50 px-3 transition duration-0">
            <h2>Lo más nuevo</h2>
          </div>
          <div onClick={()=>handleSelection(2)} className="mb-[2px] flex items-center hover:bg-blue-500 hover:text-slate-50 px-3 transition duration-0">
            <h2>Lo más antiguo</h2>
          </div>
      </div>
    ) : null
  );
}
