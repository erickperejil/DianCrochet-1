'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Sidebar() { 
    const router = useRouter();

    useEffect(() => {
        // Prefetch las rutas al cargar el componente
        router.prefetch('/profile/myvideos');
        router.prefetch('/profile/records');
        router.prefetch('/profile');
    }, [router]);

    const handleMyVideos = () => { // Limpia todos los datos del localStorage
        router.push('/profile/myvideos');  // Redirige al usuario a la página de inicio de sesión
    };

    const handleMyBills = () => { // Limpia todos los datos del localStorage
        router.push('/profile/records');  // Redirige al usuario a la página de inicio de sesión
    };

    const handleMyData = () => { // Limpia todos los datos del localStorage
        router.push('/profile');  // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <div className="w-[25%] shadow-xl h-screen relative flex flex-col items-center">
            <div className="relative rounded-full mt-32 h-28 w-28 object-contain">
                <Image
                  src="https://ik.imagekit.io/diancrochet/Fotos/GORROCUERNOS.jpg?updatedAt=1728867304044"
                  alt="Profile Pic"
                  layout="fill" // Esto hace que la imagen ocupe todo el espacio disponible
                  className="object-cover rounded-full select-none" 
                />
            </div>
            <div className="w-11/12 h-10 flex items-center justify-center "><h1 className="font-koulen select-none text-slate-700 text-xl rounded-lg ">Nombre apellido</h1></div>
            <div onClick={handleMyData} className="w-[70%] h-10 flex items-center mt-[13%]"><h1 className="font-koulen select-none text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl transition-all duration-300 ease-in-out px-2 hover:text-stone-50">Datos Personales</h1></div>
            <div onClick={handleMyBills} className="w-[70%] h-10 flex items-center "><h1 className="font-koulen select-none text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Historial de Compras</h1></div>
            <div onClick={handleMyVideos} className="w-[70%] h-10 flex items-center "><h1 className="font-koulen select-none text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Mis videos</h1></div>
            <div className="w-[70%] h-10 flex items-center "><h1 className="font-koulen select-none text-slate-700 text-xl rounded-lg hover:bg-[#C68EFE] hover:text-2xl transition-all duration-300 ease-in-out px-2 hover:text-stone-50 ">Cerrar Sesion</h1></div>
        </div>
    );
}
