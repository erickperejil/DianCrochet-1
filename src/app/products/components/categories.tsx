interface CategoriesProps {
    open: boolean; // Añadir `open` como prop
    setOpen: (value: boolean) => void; // Añadir `setOpen` como prop
  }

export default function Categorias({open, setOpen }: CategoriesProps) {
  
  return (
    open ? (
      <div className="absolute flex h-full w-full flex-col overflow-y-scroll rounded-lg bg-slate-50 p-2 shadow-2xl shadow-slate-900 drop-shadow-lg">
      <div className="mb-1 flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 font-lekton text-sm font-medium text-[#444343]"
        >
          Opcion 1
        </label>
      </div>
      <div className="mb-1 flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 font-lekton text-sm font-medium text-[#444343]"
        >
          Opcion 2
        </label>
      </div>
      <div className="mb-1 flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 font-lekton text-sm font-medium text-[#444343]"
        >
          Opcion 2
        </label>
      </div>
      <div className="mb-1 flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 font-lekton text-sm font-medium text-[#444343]"
        >
          Opcion 2
        </label>
      </div>
      <div className="mb-1 flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 inline-block h-5 border border-red-400 font-lekton text-sm font-medium text-[#444343]"
        >
          opcion
        </label>
      </div>
      <div className="mb-1 flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-transparent"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 inline-block h-5 border border-red-400 font-lekton text-sm font-medium text-[#444343]"
        >
          opcion
        </label>
      </div>
    </div>
    ):("")

  );
}
