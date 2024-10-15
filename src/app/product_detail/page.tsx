'use client'

import Navbar from "components/navbar";

import Footer from "components/Footer";
import ProductDetail from "./components/ProductDetail";
import Carrusel from "app/landing/components/Carrusel";




export default function ProductDetailPage(){
     return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar />
    <main className="bg-slate-50 flex-grow w-full">
    <div className="min-w-screen text-black bg-slate-50 flex items-center justify-start ml-24 mt-[75px]">
      <ProductDetail
      productName="Gorro Personalizado"
      price={0}
      sizes={['XS', 'S', 'M', 'L']}
      mainImage="/img/imagen34.svg" // Imagen principal
        thumbnails={[
    '/img/imagen34.svg',
    '/img/imagen34.svg',
    '/img/imagen34.svg',
    '/img/imagen34.svg',]}
      />
    </div>
    <div className="ml-24 max-w-full mr-24">
        <Carrusel/>
    </div>
       

    </main>
    <Footer />
   </div>
    );
 
}