import { useEffect, useRef, useState } from 'react';
import { GetProductosSimilares } from '@services/product'; 
import { ProductoSimilar } from '@interfaces/product';
import { useRouter } from 'next/navigation'; 
import Productx from './Productx';

export default function CarruselProductoRelacionado() {
  const [productos, setProductos] = useState<ProductoSimilar[]>([]);
  const carruselRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); 

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosSimilares = await GetProductosSimilares();
      setProductos(productosSimilares);
    };

    obtenerProductos();
  }, []);

  
  const scrollLeft = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const handleProductClick = (id: number) => {
    // Redirigir a la página de detalle del producto
    router.push(`/product_detail/${id}`);
  };

  return (
    <div className="relative w-full">
      <div className="ml-6 mb-4">
        <h1 className="font-koulen text-black text-2xl">Productos Similares</h1>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 focus:outline-none"
      >
        ◀
      </button>

      <div
        className="flex space-x-4 px-4"
        ref={carruselRef}
        style={{
          scrollSnapType: 'x mandatory',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {productos.map((producto) => (
          <div
            key={producto.ID_PRODUCTO}
            className="cursor-pointer"
            onClick={() => handleProductClick(producto.ID_PRODUCTO)} // Evento de clic para redirigir
          >
            <Productx
              nombre={producto.NOMBRE_PROD}
              precio={`L${producto.PRECIO_VENTA.toFixed(2)}`}
              imagen={producto.IMG_PRINCIPAL ? producto.IMG_PRINCIPAL : '/img/default-image.svg'}
            />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 focus:outline-none"
      >
        ▶
      </button>
    </div>
  );
}
