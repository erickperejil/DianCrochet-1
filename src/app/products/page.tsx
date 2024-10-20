'use client'
import Product from "app/landing/components/Product";
import Footer from "components/Footer";
import Navbar from "components/navbar";
import Image from "next/image";
import Categorias from "./components/categories";
import { useState } from "react";

export default function Products() {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <div>
      <Navbar />
      <section className="bg-white">
        <div className="flex h-20 items-center">
          <h1 className="pl-6 font-koulen text-5xl text-gray-900">Productos</h1>
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
        <div className="flex h-32 flex-col-reverse">
          <div className="mb-3 flex h-9 w-full items-center pl-6">
            <div className="mr-3 flex items-center rounded-2xl bg-gray-200 px-2 font-lekton text-lg text-[#444343]">
              <h2>Aretes</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="mr-3 flex items-center rounded-2xl bg-gray-200 px-2 font-lekton text-lg text-[#444343]">
              <h2>Amigurumis</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
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
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div className="top-7 absolute h-[700%] w-[160%]">
                <Categorias
                open = {showCategories}
                setOpen={setShowCategories}
                />
              </div>
            </div>

            <div className="ml-6 flex items-center font-lekton text-lg text-[#444343]">
              <h2>Precio</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.1}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div className="absolute right-[10%] ml-6 flex items-center font-lekton text-lg text-[#444343]">
              <h2>Ordenar por:</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.1}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <section className="h-full px-[8.32%] py-12">
          <div className="grid grid-cols-4 gap-6">
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>{" "}
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>{" "}
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>{" "}
            <div className="h-[364px] w-[260px] text-center">
              <Product
                nombre="Spiderman Gorro"
                precio="200L"
                imagen="/img/imagen34.svg"
              />
            </div>
          </div>
        </section>

        <div className="flex h-20 items-center border border-blue-800"></div>
      </section>
      <Footer />
    </div>
  );
}
