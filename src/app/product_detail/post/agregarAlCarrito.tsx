import { CarritoRequest } from "@interfaces/product";

export const agregarAlCarrito = async (data: CarritoRequest) => {
    try {
      const response = await fetch('http://localhost:4000/factura/carrito/insertar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar al carrito');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Hubo un problema con la solicitud');
    }
  };