import { useRef } from "react";

interface CategoriesProps {
    open: boolean; // Añadir `open` como prop
    setOpen: (value: boolean) => void; // Añadir `setOpen` como prop
  }

export default function Categorias({open, setOpen }: CategoriesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Si el desenfoque es fuera del contenedor, cerramos el componente
    if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  };
  
  return (
    open ? (
      <div 
      ref={ref} // Referencia al div principal
      tabIndex={-1} // Para que el div pueda recibir foco
      onBlur={handleBlur} 
      className="absolute flex h-full w-full flex-col overflow-y-scroll rounded-lg bg-slate-50 p-2 shadow-2xl shadow-slate-900 drop-shadow-lg">

      <div className="mb-[2px] flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 mt-[2px] font-lekton text-base font-medium text-[#444343]"
        >
          Opcion
        </label>
      </div>
      <div className="mb-[2px] flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 mt-[2px] font-lekton text-base font-medium text-[#444343]"
        >
          Opcion
        </label>
      </div>
      <div className="mb-[2px] flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 mt-[2px] font-lekton text-base font-medium text-[#444343]"
        >
          Opcion
        </label>
      </div>

      

    </div>
    ):("")

  );
}
