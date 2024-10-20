import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Datos del producto
  const productName = "Gorro Personalizado";
  const price = 0;
  const sizes = ['XS', 'S', 'M', 'L'];
  const mainImage = "/img/imagen34.svg";
  const thumbnails = [
    '/img/imagen34.svg',
    '/img/imagen34.svg',
    '/img/imagen34.svg',
    '/img/imagen34.svg',
    '/img/imagen34.svg'
  ];

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="relative w-max grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <Image
            src={mainImage}
            alt="Product image"
            width={350}
            height={350}
            className="rounded-lg w-[450px]"
          />
        </div>

        <div className="overflow-x-auto flex space-x-2 scrollbar-hide justify-center">
          <div className="flex space-x-0">
            {thumbnails.map((thumbnailSrc, index) => (
              <Image
                key={index}
                src={thumbnailSrc}
                alt={`Thumbnail ${index + 1}`}
                width={112}
                height={112}
                className="w-28 h-28 rounded-lg border cursor-pointer flex-shrink-0 m-2"
                onClick={() => handleImageClick(thumbnailSrc)}
              />
            ))}
          </div>
        </div>
        <div className="ml-24 mr-24 max-w-full p-5">
                    <p className="text-justify text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie sed nulla eleifend lobortis. Cras mollis nisi nibh, vel pretium ante auctor sit amet.
                    </p>
          </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">{productName}</h1>
        <p className="text-black">{price === 0 ? '000$' : `${price}$`}</p>
        <p className="text-sm text-black">*Precio no incluye envío</p>

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

        <button className="mt-4 px-4 py-2 bg-purple-500 text-black rounded-lg hover:bg-purple-600">
          Añadir al Carrito
        </button>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseZoom}
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