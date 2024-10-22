import { useState, useEffect } from 'react';
import { Filtered, ProductoDetalle } from "@interfaces/product";
import { useParams } from 'next/navigation';
import { FullProduct, Producto, ProductoSimilar } from "@interfaces/product";

const API_URL = "http://localhost:4000/producto";


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
  const { id } = useParams(); 

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
  

export const getProducts = async(): Promise<FullProduct[]> =>{
  const res = await fetch("http://localhost:4000/producto/Producto");
  if (!res.ok) {
    throw new Error("Error al traer productos");
  }
  const data = await res.json();
  return data.productosRandom;
}

export const FilteredProducts = async (data: Filtered)=> {
  const response = await fetch(`${API_URL}/ordenados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error filtrando productos");
    return [];
  }
  const datos = await response.json();
  return datos.productos;
};

export const getCategories = async()=>{
  const res = await fetch(`${API_URL}/categorias`);
  if (!res.ok) {
    throw new Error("Error al traer categorias");
  }
  const data = await res.json();
  return data.categorias;
}
