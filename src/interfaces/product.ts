// Definimos la interfaz ProductoPopular
export interface Producto {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    URL: string | null; // Ahora incluye la URL de la imagen
  }

  export interface ProductoDetalle {
    id_producto: number;
    nombre_prod: string;
    precio_venta: number;
    descripcion: string;
    cantidad_disp: number;
    tipo_prod: string;
    color: string;
    talla: string;
    imagen_principal: string;
    imagenes_extra: string[];
  }

  export interface ProductoSimilar {
    ID_PRODUCTO: number;
    NOMBRE_PROD: string;
    PRECIO_VENTA: number;
    IMG_PRINCIPAL: string | null; // Ahora incluye la URL de la imagen
  }

  export interface FullProduct{
    id_producto: number;
    nombre_prod: string;
    precio_venta: number;
    imagen_principal: string
  }

  export interface Filtered{
    categorias: string[];
    min_precio: number | null;
    max_precio: number | null
  }

  export interface Categories{
    ID_CATEGORIA:number;
    CATEGORIA: string
  }
