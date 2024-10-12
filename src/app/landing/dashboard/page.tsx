'use client'
import useInactivityRedirect from "hooks/useInactivityRedirect";
import Footer from "../../../components/Footer";
import Slider from "../components/Slider";
import Navbar from "../../../components/navbar";


export default function Dashboard(){
    
    useInactivityRedirect(10000);

    return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Navbar/>
    <main className="bg-slate-50 flex-grow w-full">
       <div className="flex align-middle">
       <Slider/>
       </div>
    </main>
    <Footer />
   </div>
    );
 
}