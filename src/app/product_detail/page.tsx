'use client'

import Navbar from "components/navbar";
import Footer from "components/Footer";
import ProductDetail from "./components/ProductDetail";
import CarruselProducto from "./components/CarruselProducto";

export default function ProductDetailPage(){
     return(
        <div className="w-full min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="bg-slate-50 flex-grow w-full">
                <div className="min-w-screen text-black bg-slate-50 flex items-center ml-24 mr-24 mt-[75px]">
                    <ProductDetail />
                </div>
                <div className="ml-24 max-w-full mr-24">
                    <Carrusel/>
                </div>
            </main>
            <Footer />
        </div>
    );
}
