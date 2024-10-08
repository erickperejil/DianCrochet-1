'use client'
import Header from "../components/Header";
import { useRouter } from 'next/navigation'

export default function Dashboard(){
    const router = useRouter()


    return(
   <body className="w-full h-full bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Header />
    <main className="bg-slate-500 h-[80%] w-full">
        Hola soy un main
    </main>
    <footer onClick={() => router.push('/auth/sign-in')} className="bg-slate-950 ">Footer</footer>
   </body>
    );
 
}