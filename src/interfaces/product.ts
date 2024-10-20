// Definimos la interfaz ProductoPopular
export interface Producto {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    URL: string | null; // Ahora incluye la URL de la imagen
  }