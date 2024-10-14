'use client'

import Navbar from "components/navbar";
import Slider from "./landing/components/Slider";
import Product from "./landing/components/Product";
import Footer from "components/Footer";


export default function Dashboard(){
    
    return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar />
    <main className="bg-slate-50 flex-grow w-full mt-10">
       <div className="flex align-middle">
       <Slider/>
       </div>
       <div className="flex justify-center">
        <Product nombre="Spiderman Gorro" precio="200L" imagen="/img/imagen34.svg"/>
       </div>
       <div className="flex justify-center">
        <Product nombre="Spiderman Gorro" precio="200L" imagen="/img/imagen34.svg"/>
       </div>
    </main>
    <Footer />
   </div>
    );
 
}