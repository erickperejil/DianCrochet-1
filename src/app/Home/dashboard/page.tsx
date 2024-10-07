import Header from "../components/header";

export default function Dashboard(){
    return(
   <body className="w-full h-full bg-slate-50">
   {/* Llamar a la función/componente Header */}
   <Header />
    <main className="bg-slate-500 h-[80%] w-full">
        Hola soy un main
    </main>
    <footer className="bg-slate-950 ">Footer</footer>
   </body>
    );
 
}