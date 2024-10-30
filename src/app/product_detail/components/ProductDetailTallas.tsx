import React, { useState } from 'react';
import Image from "next/legacy/image";

interface ProductProps {
  productName: string;
  price: number;
  sizes: string[];
  mainImage: string; // Imagen principal
  thumbnails: string[]; // Array de miniaturas
}

export default function ProductDetailTallas({ productName, price, sizes, mainImage, thumbnails }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null); // Estado para la imagen ampliada
  const [currentImage] = useState(mainImage); // Imagen actual, que inicialmente será la principal

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Maneja el click en las miniaturas para ampliarlas
  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc); // Establece la imagen en el estado de zoom al hacer clic en la miniatura
  };

  const handleCloseZoom = () => {
    setZoomedImage(null); // Restablece el estado de zoom a null para cerrar el modal
  };

  return (
    <div className="relative w-max grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Imagen principal y miniaturas */}
      <div className="flex flex-col space-y-4 ">
        {/* Imagen principal */}
        <div className="flex justify-center ">
          <Image
            src={currentImage} // La imagen principal es controlada por el estado
            alt="Product image"
            width={350}
            height={350}
            className="rounded-lg w-[450px]"
          />
        </div>

        {/* Miniaturas en formato carrusel, barra de scroll oculta */}
        <div className="overflow-x-auto flex space-x-2 scrollbar-hide justify-center ">
          <div className="flex space-x-0">
            {thumbnails.map((thumbnailSrc, index) => (
              <Image
                key={index}
                src={thumbnailSrc} // Cada miniatura usa una imagen del array
                alt={`Thumbnail ${index + 1}`}
                width={112}
                height={112}
                className="w-28 h-28 rounded-lg border cursor-pointer flex-shrink-0 m-2"
                onClick={() => handleImageClick(thumbnailSrc)} // Ampliamos la miniatura al hacer clic
              />
            ))}
          </div>
        </div>

        {/* Descripción del producto */}
        
      </div>

      {/* Detalles del producto */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">{productName}</h1>
        <p className="text-black">{price === 0 ? '000$' : `${price}$`}</p>
        <p className="text-sm text-black">*Precio no incluye envío</p>

        {/* Tallas */}
        <div>
          <p className="text-sm text-black mb-2">Talla</p>
          <div className="flex space-x-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border text-black rounded-md bg-gray-200 hover:bg-purple-500 focus:outline-none"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Cantidad */}
        <div className="flex items-center space-x-4">
          <p className="text-sm text-black">Cantidad</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-purple-500"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-purple-500"
            >
              +
            </button>
          </div>
        </div>

        {/* Botón Añadir al Carrito */}
        <button className="mt-4 px-4 py-2 bg-purple-500 text-black rounded-lg hover:bg-purple-600">
          Añadir al Carrito
        </button>
      </div>

      {/* Imagen ampliada (zoom) */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseZoom} // Cerrar la imagen cuando se haga clic en cualquier parte fuera
        >
          <div className="relative">
            <Image
              src={zoomedImage}
              alt="Zoomed product"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
