import { Producto } from "@interfaces/product";
import { useState, useEffect } from 'react';
import { ProductoDetalle } from "@interfaces/product";
import { useParams } from 'next/navigation';
import { Producto, ProductoSimilar } from "@interfaces/product";

// Función para obtener los productos populares desde el backend
export const GetProductosPopulares = async (): Promise<Producto[]> => {
  try {
    const response = await fetch('http://localhost:4000/producto/filtro/popularidad/1');
    const data = await response.json();
    return data.populares; 
  } catch (error) {
    console.error('Error al obtener productos populares:', error);
    return []; 
  }
};

export const GetProductosSimilares = async (): Promise<ProductoSimilar[]> => {
  try {
    const response = await fetch('http://localhost:4000/producto/similares/21');
    const data = await response.json();
    return data.productosSimilares; 
  } catch (error) {
    console.error('Error al obtener productos populares:', error);
    return []; 
  }
};

export function useProducto() {
  const [producto, setProducto] = useState<ProductoDetalle | null>(null);
  const { id } = useParams(); // Obtiene el ID de la URL

  useEffect(() => {
    const obtenerDetallesProducto = async () => {
      try {
        const response = await fetch(`http://localhost:4000/producto/detalle/${id}`);

        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.DetalleProducto && data.DetalleProducto.length > 0) {
          setProducto(data.DetalleProducto[0]);
        } else {
          console.error('No se encontraron detalles del producto en la respuesta');
        }
      } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
      }
    };

    if (id) {
      obtenerDetallesProducto();
    }
  }, [id]);

  return producto;
}
  
}; 
