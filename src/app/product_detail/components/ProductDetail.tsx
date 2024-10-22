import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ProductoDetalle } from '@interfaces/product';
import { agregarAlCarrito } from '../post/agregarAlCarrito'; // Importa la función del POST

interface ProductDetailProps {
  producto: ProductoDetalle;
}

const ProductDetail = ({ producto }: ProductDetailProps) => {
  const [selectedTalla, setSelectedTalla] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState<number>(1);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);
  const [mensajeError, setMensajeError] = useState<string | null>(null); // Estado para mensaje de error
  const [correo, setCorreo] = useState<string>(''); // Estado para almacenar el correo

  useEffect(() => {
    // Obtener el correo desde el local storage
    const storedData = localStorage.getItem('loginResponse');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const storedCorreo = parsedData?.query_result?.CORREO;
      console.log('Correo almacenado:', storedCorreo);
      setCorreo(storedCorreo || ''); // Asignar correo o una cadena vacía
    }
  }, []);

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

  const handleAddToCart = async () => {
    // Verifica si el correo está disponible
    if (!correo) {
      console.error('No se encontró el correo del usuario en localStorage');
      setMensajeError('Debes iniciar sesión para poder agregar productos al carrito.'); // Mostrar mensaje de advertencia
      setTimeout(() => setMensajeError(null), 3000); // Ocultar mensaje después de 3 segundos
      return;
    }

    const idProducto = producto.id_producto.toString();

    // Convertir la cantidad a string antes de enviarla
    const data = {
      correo,
      idProducto,
      cantidadCompra: cantidad.toString(), // Conversión de number a string
      talla: selectedTalla || null,
    };

    try {
      const result = await agregarAlCarrito(data);
      console.log('Resultado del POST:', result);
      setMensajeExito('¡Producto agregado al carrito con éxito!');
      setTimeout(() => setMensajeExito(null), 3000);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  };

  return (
    <div className="relative w-max grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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

      {mensajeExito && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg z-50">
          {mensajeExito}
        </div>
      )}

      {mensajeError && (
        <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg z-50">
          {mensajeError}
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          {producto.imagen_principal ? (
            <Image
              src={producto.imagen_principal}
              alt={producto.nombre_prod}
              width={350}
              height={350}
              className="rounded-lg w-[450px]"
            />
          ) : (
            <div className="w-[350px] h-[350px] flex items-center justify-center bg-gray-200 rounded-lg">
              <p className="text-gray-500">Imagen no disponible</p>
            </div>
          )}
        </div>

        <div className="overflow-x-auto flex space-x-2 scrollbar-hide justify-center">
          {(producto.imagenes_extra || []).map((thumbnailSrc, index) => (
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
        <p className="text-black font-koulen">L{producto.precio_venta.toFixed(2)}</p>
        <p className="font-lekton text-black">*Precio no incluye envío</p>

        {producto.tallas && producto.tallas.filter(talla => talla !== null).length > 0 ? (
          <div>
            <h3 className="font-koulen">TALLA</h3>
            <div className="flex space-x-2 mt-2 font-koulen text-black">
              {producto.tallas.filter(talla => talla !== null).map((talla) => (
                <button
                  key={talla}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedTalla === talla ? 'bg-[#C68EFE] text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedTalla(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div>
          <h3 className="font-koulen">Cantidad</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-lg">
            <button
              className="px-4 py-2 text-white bg-[#C68EFE] rounded-lg mr-5"
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
              className="px-4 py-2 bg-[#C68EFE] text-white rounded-lg ml-5"
              onClick={() => handleCantidadChange(cantidad + 1)}
            >
              +
            </button>
          </div>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-[#C68EFE] text-white rounded-lg hover:bg-purple-600 font-lekton"
          onClick={handleAddToCart}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
