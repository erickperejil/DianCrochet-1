import Image from 'next/image';
export default function Sidebar() { 
    return (
        <div className="w-[25%] border border-red-500 h-screen relative flex flex-col items-center">
            <div className="relative rounded-full mt-32 h-28 w-28 object-contain">
                <Image
                  src="https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"
                  alt="Profile Pic"
                  layout="fill" // Esto hace que la imagen ocupe todo el espacio disponible
                  className="object-cover rounded-full select-none" 
                />
            </div>
            <div className="w-11/12 h-10 flex items-center justify-center "><h1 className="font-koulen text-slate-700 text-xl rounded-lg ">Nombre apellido</h1></div>
            <div className="w-8/12 h-10 flex items-center mt-[13%]"><h1 className="font-koulen text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl hover:w-full transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Datos Personales</h1></div>
            <div className="w-8/12 h-10 flex items-center "><h1 className="font-koulen text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl hover:w-full transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Historial de Compras</h1></div>
            <div className="w-8/12 h-10 flex items-center "><h1 className="font-koulen text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl hover:w-full transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Mis videos</h1></div>
            <div className="w-8/12 h-10 flex items-center "><h1 className="font-koulen text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl hover:w-full transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Cerrar Sesion</h1></div>
        </div>
    );
}
