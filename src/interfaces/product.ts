// Definimos la interfaz ProductoPopular
export interface Producto {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    URL: string | null; // Ahora incluye la URL de la imagen
  }

  export interface ProductoSimilar {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    IMG_PRINCIPAL: string | null; // Ahora incluye la URL de la imagen
  }
