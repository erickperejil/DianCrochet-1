"use client";
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);  // Definir tipo para la referencia
  const router = useRouter()

  const toggleProfileMenu = () => {
    setProfileOpen(!isProfileOpen);
  };

  // useEffect para manejar el clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {  // Especificar el tipo del evento
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);  // Cierra el menú si se hace clic fuera de él
      }
    };

    // Agregar event listener cuando el menú está abierto
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Limpiar event listener cuando se desmonte el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <header className="bg-white shadow-md font-koulen">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/img/logo.svg" alt="Logo" width={40} height={40} />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-500">PRODUCTOS</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">KITS</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">TUTORIALES</a>
          </nav>
        </div>

        {/* Iconoss */}
        <div className="flex items-center space-x-6 relative">
          {/* Perfil */}
          <div className="relative flex items-center" ref={profileRef}>
            <button onClick={toggleProfileMenu} className="focus:outline-none" title='iconos'>
              <FaUserCircle className="text-gray-700 text-2xl" />
            </button>

            {/* Acorderon Perfil */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mi Perfil</a>
                <a onClick={() => router.push('/auth/sign-in')} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cerrar Sesion</a>
              </div>
            )}
          </div>

          {/* Carrito */}
          <button title='carrito'>
            <FaShoppingCart className="text-gray-700 text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}


      