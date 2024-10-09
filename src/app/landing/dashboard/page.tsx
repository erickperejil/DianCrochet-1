'use client'
import useInactivityRedirect from "hooks/useInactivityRedirect";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";


export default function Dashboard(){
    
    useInactivityRedirect(100000);

    return(
   <div className="w-full min-h-screen flex flex-col bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Header />
    <main className="bg-slate-50 flex-grow w-full">
       <div className="flex align-middle">
       <Slider/>
       </div>
    </main>
    <Footer />
   </div>
    );
 
}