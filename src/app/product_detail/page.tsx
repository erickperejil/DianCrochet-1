'use client'

import Navbar from "components/navbar";

import Footer from "components/Footer";
import ProductDetail from "./components/ProductDetail";
import CarruselProducto from "./components/CarruselProducto";




export default function ProductDetailPage(){
     return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar />
    <main className="bg-slate-50 flex-grow w-full">
    <div className="min-w-screen text-black bg-slate-50 flex items-center ml-24 mr-24 mt-[75px]">
      <ProductDetail
      productName="Gorro Personalizado"
      price={0}
      sizes={['XS', 'S', 'M', 'L']}
      mainImage="/img/imagen34.svg" // Imagen principal
        thumbnails={[
          '/img/imagen34.svg',
          '/img/imagen34.svg',
          '/img/imagen34.svg',
          '/img/imagen34.svg',
          '/img/imagen34.svg']}
      />
    </div>
    <div className="ml-24 mr-24 max-w-full p-5">
          <p className="text-justify text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie sed nulla eleifend lobortis. Cras mollis nisi nibh, vel pretium ante auctor sit amet. Cras luctus, mauris vel porttitor tincidunt, lacus leo pulvinar eros, in faucibus lectus metus vitae leo. Proin nisl lectus, egestas in magna sed, volutpat ullamcorper nibh. Donec mattis at justo eget viverra.
          </p>
     </div>
    <div className="ml-24 max-w-full mr-24">
        <CarruselProducto/>
    </div>
    

    </main>
    <Footer />
   </div>
    );
 
}