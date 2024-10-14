'use client'

import Navbar from "components/navbar";
import Slider from "./landing/components/Slider";
import Footer from "components/Footer";
import Carrusel from "./landing/components/Carrusel";



export default function Dashboard(){
    
    return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar />
    <main className="bg-slate-50 flex-grow w-full mt-10 ">
       <div className="flex justify-center">
       <Slider/>
       </div>
       <div className="flex justify-center">
            <Carrusel/>
       </div>
       <div className="flex justify-center">
            <Carrusel/>
       </div>
    </main>
    <Footer />
   </div>
    );
 
}