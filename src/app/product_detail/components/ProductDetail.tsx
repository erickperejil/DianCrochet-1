import Image from 'next/image';
import { ProductoDetalle } from '@interfaces/product';

interface ProductDetailProps {
  producto: ProductoDetalle;
}

const ProductDetail = ({ producto }: ProductDetailProps) => {
  return (
    <div>
      <div className="relative w-max grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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
              />
            ))}
          </div>

          <div className="ml-24 mr-24 max-w-full p-5">
            <p className="text-justify text-gray-700">{producto.descripcion}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">{producto.nombre_prod}</h1>
          <p className="text-black">${producto.precio_venta.toFixed(2)}</p>
          <p className="text-sm text-black">*Precio no incluye envío</p>
          <div>
            <p className="text-sm text-black mb-2">Talla: {producto.talla}</p>
          </div>

          <button className="mt-4 px-4 py-2 bg-purple-500 text-black rounded-lg hover:bg-purple-600">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;