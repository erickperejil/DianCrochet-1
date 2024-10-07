import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export default function Header(){
    return(
        
        <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* Usa next/image para optimización de imagen */}
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-500">PRODUCTOS</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">KITS</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">TUTORIALES</a>
          </nav>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center border-2 border-gray-300 rounded-full px-4 py-1 w-1/3">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="outline-none w-full text-gray-600" 
          />
          <button>
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button>
            <FaUserCircle className="text-gray-700 text-2xl" />
          </button>
          <button>
            <FaShoppingCart className="text-gray-700 text-2xl" />
          </button>
        </div>
      </div>
    </header>
    
    )
}

