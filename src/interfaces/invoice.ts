export interface Producto {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    URL: string | null; // Ahora incluye la URL de la imagen
}

export interface CarritoItem {
    id_prod_fact: number;
    id_producto: number;
    nombre_prod: string;
    cantidad_compra: number;
    subtotal: number | null;
    url: string | null;
}

export interface Carrito {
    carrito: CarritoItem[];
}

interface Departamento {
    ID_DEPARTAMENTO: number;
    DEPARTAMENTO: string;
  }
  