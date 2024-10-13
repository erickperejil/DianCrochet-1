'use client'
import useInactivityRedirect from "hooks/useInactivityRedirect";
import Footer from "../../../components/Footer";
import Slider from "../components/Slider";
import Navbar from "components/navbar";
import Product from "../components/Product";


export default function Dashboard(){
    
    useInactivityRedirect(100000);

    return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar />
    <main className="bg-slate-50 flex-grow w-full">
       <div className="flex align-middle">
       <Slider/>
       </div>
       <div className="flex justify-center">
        <Product nombre="Spiderman Gorro" precio="200L" imagen="/img/imagen34.svg"/>
       </div>
    </main>
    <Footer />
   </div>
    );
 
}