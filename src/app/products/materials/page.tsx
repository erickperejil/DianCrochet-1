"use client";
import Product from "../../landing/components/Product";
import Footer from "components/Footer";
import Navbar from "components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Prices from "../components/prices";
import { Filtered, FullMaterial } from "@interfaces/product";
import { getMaterials, FilteredMaterials } from "@services/product";
import Ordenamiento from "../components/ordenamiento";
import CategoriasMateriales from "../components/categoriesMaterials";
import { useRouter } from 'next/navigation'; 

export default function Materials() {
  const router = useRouter(); 
  const [showCategories, setShowCategories] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const [productos, setProductos] = useState<FullMaterial[]>([]);
  const [productsSplit, setProductsSplit] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  const [, setPricesData] = useState<Filtered>({
    categorias: [],
    min_precio: null,
    max_precio: null,
    columna_ordenamiento: null,
    direccion_ordenamiento: null,
  });

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState("");
  const [orden, setOrden] = useState("");

  const nombresFiltros: { [key: string]: string } = {
    NOMBRE_PROD_ASC: "Alfabético A-Z",
    NOMBRE_PROD_DESC: "Alfabético Z-A",
    FECHA_CREACION_ASC: "Lo más antiguo",
    FECHA_CREACION_DESC: "Lo más nuevo",
    PRECIO_VENTA_ASC: "Precio menor primero",
    PRECIO_VENTA_DESC: "Precio mayor primero",
  };

  const deleteFilter = () => {
    setOrdenamiento("");
    setOrden("");
  };

  const deleteCategory = (index: number) => {
    setCategories((prevCategories) =>
      prevCategories.filter((_, i) => i !== index),
    );
  };
  const handleSendCategories = async (updatedCategories: string[]) => {
    // Usa las categorías actualizadas que recibiste como argumento
    const filteredData = {
      categorias:
        updatedCategories.length > 0 && updatedCategories[0] != ""
          ? updatedCategories
          : null,
      min_precio: minPrice == 0 && maxPrice == 0 ? null : minPrice,
      max_precio:
        (minPrice == 0 && maxPrice == 0) || minPrice > maxPrice
          ? null
          : maxPrice,
      columna_ordenamiento: ordenamiento != "" ? ordenamiento : null,
      direccion_ordenamiento: orden != "" ? orden : null,
    };

    console.log(filteredData);
    // Ahora debería mostrar las categorías correcta
    try {
      console.log("enviando:", filteredData)
      const res = await FilteredMaterials(filteredData); 
      console.log("recibiendo:", res)// Llama a la función para obtener los productos filtrados
      setProductos(res); // Limpia productos antes de actualizar
    } catch (error) {
      console.error("Error al traer productos:", error);
    }
  };

  const handleFilter = () => {
    setShowPrices(false); // Oculta precios
    console.log("padre:", categories);
    setPricesData((prevState) => ({
      ...prevState,
      categorias: categories,
      min_precio: null,
      max_precio: null,
    }));
    handleSendCategories(categories);
  };

  const handleOrder = () => {
    setShowPrices(false);
    setShowCategories(false);
    setShowOrder(!showOrder);
  };

  const deletePrice = () => {
    setMinPrice(0);
    setMaxPrice(0);
  };

  const handlePrices = () => {
    setShowPrices(!showPrices);
    setShowCategories(false);
    setPricesData({
      categorias: categories,
      min_precio: minPrice,
      max_precio: maxPrice,
      columna_ordenamiento: ordenamiento,
      direccion_ordenamiento: orden,
    });
  };

  const handlePageNumber = (index: number) => {
    setPageNumber(index);
    setProductsSplit((index - 1) * 16);
    if (productsSplit != (index - 1) * 16) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Esto hace que el desplazamiento sea suave
      });
    }
  };

  const handleSplitNext = () => {
    if (productos.length >= productsSplit + 16) {
      setProductsSplit(productsSplit + 16);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Esto hace que el desplazamiento sea suave
      });
      setPageNumber(pageNumber + 1);
    }
  };

  const handleSplitPrev = () => {
    if (productsSplit - 16 >= 0) {
      setProductsSplit(productsSplit - 16);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Esto hace que el desplazamiento sea suave
      });
      setPageNumber(pageNumber - 1);
    }
  };

  const totalProducts = productos.length;

  // Calculamos x como el número de páginas (o grupos) en base a 16 productos por grupo
  const pagesNumber = Math.ceil(totalProducts / 15);
  const divNumbers = Array.from({ length: pagesNumber }, (_, i) => i + 1);

  useEffect(() => {
    async function fetchGets() {
      try {
        const res = await getMaterials(); // Llama a la función para obtener los productos
        setProductos(res); // Actualiza el estado con el resultado
      } catch (error) {
        console.error("Error al traer materiales:", error);
      }
    }
    fetchGets();
  }, []);

  const handleToggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  
  const handleProductClick = (id: number) => {
    // Redirigir a la página de detalle del producto
    router.push(`/product_detail/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="h-24 bg-white"></div>
      <section className="bg-white">
        <div className="flex h-20 items-center">
          <h1 className="pl-6 font-koulen text-5xl text-gray-900">
            Materiales
          </h1>
          <Image
            src="/img/girasol.svg"
            alt="Crochet Flower"
            width={40}
            height={40}
            className="pointer-events-none ml-3 mix-blend-multiply"
          />
          <Image
            src="/img/girasol.svg"
            alt="Crochet Flower"
            width={15}
            height={15}
            className="pointer-events-none ml-2 mt-4 mix-blend-multiply"
          />
        </div>
        <div className="-mt-4 flex h-32 flex-col-reverse">
          <div className="mb-3 flex h-9 w-full items-center pl-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="mr-3 flex items-center rounded-2xl bg-gray-200 px-2 font-lekton text-lg text-[#444343]"
              >
                <h2>{category}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="z-20 size-5 pl-1"
                  onClick={() => {
                    deleteCategory(index);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ))}

            {!showPrices && (minPrice !== 0 || maxPrice !== 0) && (
              <div className="mr-3 flex items-center rounded-2xl bg-gray-200 px-2 font-lekton text-lg text-[#444343]">
                {minPrice > maxPrice ? (
                  <>
                    <h2>{minPrice}-min</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="z-20 size-5 pl-1"
                      onClick={deletePrice}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <h2>
                      {minPrice}-{maxPrice}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="z-20 size-5 pl-1"
                      onClick={deletePrice}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                )}
              </div>
            )}

            <div className="mr-3 flex items-center px-2 font-lekton text-lg text-[#444343]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="z-20 size-6"
                onClick={handleFilter}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </div>

            <div className="mr-3 flex items-center px-2 font-lekton text-lg text-[#444343]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>

            {ordenamiento != "" && (
              <div className="absolute right-[7.5%] mr-3 flex items-center rounded-2xl bg-gray-200 px-2 font-lekton text-lg text-[#444343]">
                <>
                  <h2>{nombresFiltros[`${ordenamiento}_${orden}`] || ""}</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="z-20 size-5 pl-1"
                    onClick={deleteFilter}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </>
              </div>
            )}
          </div>

          <div className="relative mb-3 flex h-9 w-full items-center pl-6">
            <h2 className="font-lekton text-lg text-[#444343]">Filtros :</h2>

            <div className="relative ml-6 flex items-center font-lekton text-lg text-[#444343]">
              <h2>Categorias</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.1}
                stroke="currentColor"
                className={`size-5 transition-all duration-300 ease-linear rotate${showCategories ? "rotate-180 transform" : ""}`}
                onClick={handleToggleCategories}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div className="absolute top-7">
                <CategoriasMateriales
                  open={showCategories}
                  setOpen={setShowCategories}
                  categories={categories}
                  setCategories={setCategories}
                />
              </div>
            </div>

            <div className="relative ml-6 flex items-center font-lekton text-lg text-[#444343]">
              <h2>Precio</h2>
              <svg
                onClick={handlePrices}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.1}
                stroke="currentColor"
                className={`size-5 transition-all duration-300 ease-linear rotate${showPrices ? "rotate-180 transform" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="absolute top-7 ml-4 h-[250%] w-[340%] rounded-lg">
                <Prices
                  open={showPrices}
                  setOpen={setShowPrices}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              </div>
            </div>

            <div className="absolute right-[5%] ml-6 flex select-none items-center font-lekton text-lg text-[#444343]">
              <h2>Ordenar por:</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.1}
                stroke="currentColor"
                className="size-5"
                onClick={handleOrder}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div className="absolute right-[2.5%] top-7 w-[180%]">
                <Ordenamiento
                  open={showOrder}
                  setOpen={setShowOrder}
                  setOrdenamiento={setOrdenamiento}
                  setAscendente={setOrden}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="h-full px-[8.32%] py-12">
          <div className="grid grid-cols-4 gap-6">
            {productos
              .slice(productsSplit, productsSplit + 16)
              .map((producto) => (
                <div
                  key={producto.id_material}
                  className="h-[364px] w-[260px] text-center"
                  onClick={() => handleProductClick(producto.id_material)}
                >
                  <Product
                    nombre={producto.nombre_prod}
                    precio={`$${producto.precio_venta.toFixed(2)}`}
                    imagen={
                      producto.imagen_principal != null
                        ? producto.imagen_principal
                        : "https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"
                    }
                  />
                </div>
              ))}
          </div>
        </section>

        <div className="flex h-20 items-start justify-end border border-blue-800 px-[8.32%]">
          <div className="flex h-2/3">
            <button
              onClick={handleSplitPrev}
              type="button"
              className="mb-2 me-2 flex h-full w-20 items-center justify-center bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <div className="flex h-full items-center justify-evenly bg-slate-50 px-1">
              {divNumbers.map((number) =>
                divNumbers.length > 4 ? (
                  pageNumber === 1 ? (
                    // Cuando estamos en el primer número
                    <div>
                      {number <= 3 ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : number === 4 ? (
                        <div className="mx-1 flex h-7 w-9 items-end justify-center font-lekton text-lg text-blue-400">
                          ...
                        </div>
                      ) : null}
                    </div>
                  ) : pageNumber === 2 ? (
                    // Cuando estamos en el segundo número
                    <div>
                      {number <= 3 ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : number === 4 ? (
                        <div className="mx-1 flex h-7 w-9 items-end justify-center font-lekton text-lg text-blue-400">
                          ...
                        </div>
                      ) : number === divNumbers.length ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : null}
                    </div>
                  ) : pageNumber === 3 ? (
                    // Cuando estamos en el tercer número
                    <div>
                      {number >= 2 && number <= 4 ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : number === 5 ? (
                        <div className="mx-1 flex h-7 w-9 items-end justify-center font-lekton text-lg text-blue-400">
                          ...
                        </div>
                      ) : null}
                    </div>
                  ) : pageNumber === divNumbers.length - 1 ||
                    pageNumber === divNumbers.length ? (
                    // Cuando estamos en el penúltimo o último número
                    <div>
                      {number === 1 ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : number === divNumbers.length - 2 ? (
                        <div className="mx-1 flex h-7 w-9 items-end justify-center font-lekton text-lg text-blue-400">
                          ...
                        </div>
                      ) : number === divNumbers.length ? (
                        <div
                          key={number}
                          onClick={() => handlePageNumber(number)}
                          className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                            pageNumber === number
                              ? "bg-pink-500 text-white"
                              : "text-pink-500 hover:bg-pink-500 hover:text-white"
                          }`}
                        >
                          {number}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    // Para cualquier otro número
                    <div
                      key={number}
                      onClick={() => handlePageNumber(number)}
                      className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                        pageNumber === number
                          ? "bg-pink-500 text-white"
                          : "text-pink-500 hover:bg-pink-500 hover:text-white"
                      }`}
                    >
                      {number}
                    </div>
                  )
                ) : (
                  // Para menos de 4 elementos
                  <div
                    key={number}
                    onClick={() => handlePageNumber(number)}
                    className={`mx-1 flex h-7 w-7 items-center justify-center border border-pink-500 pt-1 font-lekton text-lg ${
                      pageNumber === number
                        ? "bg-pink-500 text-white"
                        : "text-pink-500 hover:bg-pink-500 hover:text-white"
                    }`}
                  >
                    {number}
                  </div>
                ),
              )}
            </div>
            <button
              onClick={handleSplitNext}
              type="button"
              className="mb-2 me-2 flex h-full w-20 items-center justify-center bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-transparent dark:focus:ring-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-6 -scale-x-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
