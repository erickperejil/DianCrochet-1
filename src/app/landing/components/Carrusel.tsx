import { useRef } from 'react';
import Product from './Product';

export default function Carrusel() {
  const carruselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: -300, // Ajusta este valor según el tamaño de tus productos
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: 300, // Ajusta este valor según el tamaño de tus productos
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative max-w-screen">
      <div className="ml-6">
            <h1 className="font-koulen text-black">Nuevos Productos</h1>
        </div>  
      {/* Botón Izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
      >
        ◀
      </button>

      {/* Contenedor del carrusel */}
      <div
        className="flex overflow-x-hidden scroll-smooth space-x-4 p-4"
        ref={carruselRef}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Productos dentro del carrusel */}
        <Product nombre="Kirby Llavero" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Gorro Spiderman" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Peluche Baphomet" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Gorro Cuernos" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Bufanda Roja" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Guantes Invernales" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Sombrero de Sol" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Bolso Tejido" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Cartera de Mano" precio="000$" imagen="/img/imagen34.svg" />
        <Product nombre="Cojín Decorativo" precio="000$" imagen="/img/imagen34.svg" />
      </div>

      {/* Botón Derecha */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  );
}
