import { useEffect, useRef, useState } from 'react';
import Product from './Product';
import { GetProductosPopulares } from '@services/product'; 
import { Producto } from '@interfaces/product';



export default function Carrusel() {

  const [productos, setProductos] = useState<Producto[]>([]);
  const carruselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Usamos la función fetch importada para obtener los productos populares
    const obtenerProductos = async () => {
      const productosPopulares = await GetProductosPopulares();
      setProductos(productosPopulares);
    };

    obtenerProductos();
  }, []);

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
    <div className="relative w-full">
      <div className="ml-6 mb-4">
        <h1 className="font-koulen text-black text-2xl">Productos Populares</h1>
      </div>

      {/* Botón Izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 focus:outline-none"
      >
        ◀
      </button>

      {/* Contenedor del carrusel */}
      <div
        className="flex space-x-4 px-4"
        ref={carruselRef}
        style={{
          scrollSnapType: 'x mandatory',
          overflowX: 'hidden', // Ocultamos la barra de scroll
          scrollbarWidth: 'none', // Ocultamos la barra de scroll en Firefox
        }}
      >
        {/* Ocultamos el scroll de navegadores basados en Webkit como Chrome */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Renderizamos los productos dinámicamente */}
        {productos.map((producto) => (
          <Product
            key={producto.ID_PRODUCTO}
            nombre={producto.NOMBRE_PROD}
            precio={`$${producto.PRECIO_VENTA.toFixed(2)}`} // Renderizamos el precio con dos decimales
            imagen={producto.URL ? producto.URL : '/img/default-image.svg'} // Si la URL es null, usamos una imagen por defecto
          />
        ))}
      </div>

      {/* Botón Derecha */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 focus:outline-none"
      >
        ▶
      </button>
    </div>
  );
}
