import { Producto } from "@interfaces/product";

// Función para obtener los productos populares desde el backend
export const GetProductosPopulares = async (): Promise<Producto[]> => {
  try {
    const response = await fetch('http://localhost:4000/producto/filtro/popularidad/1');
    const data = await response.json();
    return data.populares; // Asumimos que 'populares' es un array de Producto
  } catch (error) {
    console.error('Error al obtener productos populares:', error);
    return []; 
  }
};

export const GetProductosSimilares = async (): Promise<Producto[]> => {
  try {
    const response = await fetch('http://localhost:4000/producto/filtro/popularidad/1');
    const data = await response.json();
    return data.populares; 
  } catch (error) {
    console.error('Error al obtener productos populares:', error);
    return []; 
  }
}; 
