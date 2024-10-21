import Image from 'next/image';
import { useState } from 'react';
import { ProductoDetalle } from '@interfaces/product';

interface ProductDetailProps {
  producto: ProductoDetalle;
}

const ProductDetail = ({ producto }: ProductDetailProps) => {
  const [selectedTalla, setSelectedTalla] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState<number>(1);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const handleCantidadChange = (newCantidad: number) => {
    if (newCantidad >= 1) {
      setCantidad(newCantidad);
    }
  };

  const handleThumbnailClick = (src: string) => {
    setZoomImage(src);
  };

  const handleZoomClose = () => {
    setZoomImage(null);
  };

  return (
    <div className="relative w-max grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Modal para la imagen con zoom */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleZoomClose}
        >
          <Image
            src={zoomImage}
            alt="Zoom de imagen"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <Image
            src={producto.imagen_principal}
            alt={producto.nombre_prod}
            width={350}
            height={350}
            className="rounded-lg w-[450px]"
          />
        </div>

        <div className="overflow-x-auto flex space-x-2 scrollbar-hide justify-center">
          {producto.imagenes_extra.map((thumbnailSrc, index) => (
            <Image
              key={index}
              src={thumbnailSrc}
              alt={`Imagen adicional ${index + 1}`}
              width={112}
              height={112}
              className="w-28 h-28 rounded-lg border cursor-pointer flex-shrink-0 m-2"
              onClick={() => handleThumbnailClick(thumbnailSrc)}
            />
          ))}
        </div>

        <div className="ml-24 mr-24 max-w-full p-5">
          <p className="text-justify font-lekton text-gray-700">{producto.descripcion}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-koulen">{producto.nombre_prod}</h1>
        <p className="text-black font-koulen">${producto.precio_venta.toFixed(2)}</p>
        <p className="font-lekton text-black">*Precio no incluye envío</p>

        {/* Selección de Talla */}
        <div>
          <h3 className="font-koulen">TALLA</h3>
          <div className="flex space-x-2 mt-2 font-koulen text-black">
            {['XS', 'S', 'M', 'L'].map((talla) => (
              <button
                key={talla}
                className={`px-4 py-2 border rounded-lg ${
                  selectedTalla === talla ? 'bg-purple-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedTalla(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>
        <div><h3 className="font-koulen">Cantidad</h3>
        </div>

        {/* Selección de Cantidad */}
        <div className="flex items-center space-x-4">
          
         
          <div className="flex items-center border rounded-lg">
            <button
              className="px-4 py-2 text-white bg-purple-500 rounded-lg mr-5"
              onClick={() => handleCantidadChange(cantidad - 1)}
            >
              -
            </button>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => handleCantidadChange(parseInt(e.target.value))}
              className="w-12 text-center border-none focus:outline-none appearance-none"
              min={1}
            />
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded-lg ml-5"
              onClick={() => handleCantidadChange(cantidad + 1)}
            >
              +
            </button>
          </div>
        </div>
          <div>

          </div>
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-lekton">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
