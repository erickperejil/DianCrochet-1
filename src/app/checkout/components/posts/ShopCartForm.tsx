import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiImageOff } from "react-icons/ci";
import { CarritoItem } from "@interfaces/invoice";
import { useRouter } from 'next/navigation';
import LoadingSpinner from "../loadding/LoadingSpinnerSob";


export default function ShopCartForm() {
    const [carrito, setCarrito] = useState<CarritoItem[]>([]);
    const [correo, setCorreo] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [impuestos, setImpuestos] = useState(0);
    const [total, setTotal] = useState(0);
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    const handleShippingDetailsClick = () => {
      setLoading(true);
      router.push('/checkout/shipping');
    };
    
    useEffect(() => {
        // Obtener el correo desde el local storage
        const storedData = localStorage.getItem('loginResponse');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const storedCorreo = parsedData.query_result.CORREO;
            console.log('Correo almacenado:', storedCorreo); // Verifica el correo almacenado
            setCorreo(storedCorreo);
        }
    }, []);

    useEffect(() => {
        if (correo) {
            const fetchCarrito = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/factura/carrito/${correo}`);
                    const data = await response.json();
                    console.log('Datos del carrito:', data); // Verifica los datos recibidos
                    setCarrito(data.carrito);
                } catch (error) {
                    console.error('Error al obtener el carrito:', error);
                }
            };

            fetchCarrito();
        }
    }, [correo]);

    useEffect(() => {
        // Calcular el subtotal
        const newSubtotal = carrito.reduce((acc, item) => acc + (item.subtotal || 0), 0);
        setSubtotal(newSubtotal);

        // Calcular los impuestos (por ejemplo, 15% del subtotal)
        const newImpuestos = newSubtotal * 0.15;
        setImpuestos(newImpuestos);

        // Calcular el total
        const newTotal = newSubtotal + newImpuestos;
        setTotal(newTotal);
    }, [carrito]);

    // Eliminar producto carrito
    const handleDelete = async (idProducto: number) => {
        try {
            const response = await fetch('http://localhost:4000/factura/carrito/producto/eliminar', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, idProducto }),
            });

            if (response.ok) {
                // Eliminar el producto del estado local
                setCarrito(carrito.filter(item => item.id_producto !== idProducto));
            } else {
                console.error('Error al eliminar el producto del carrito');
            }
        } catch (error) {
            console.error('Error al eliminar el producto del carrito:', error);
        }
    };

    //Actualizar cantidad de productos
    const handleQuantityChange = async (idProducto: number, delta: number) => {
        const updatedCarrito = carrito.map(item => {
            if (item.id_producto === idProducto) {
                const newCantidad = item.cantidad_compra + delta;
                return {
                    ...item,
                    cantidad_compra: newCantidad > 0 ? newCantidad : 1, // Asegurarse de que la cantidad no sea menor que 1
                    subtotal: (item.subtotal ?? 0) / item.cantidad_compra * (newCantidad > 0 ? newCantidad : 1) // Actualizar el subtotal
                };
            }
            return item;
        });

        setCarrito(updatedCarrito);

        try {
            const response = await fetch('http://localhost:4000/factura/carrito/actualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, nuevaCantidad: updatedCarrito.find(item => item.id_producto === idProducto)?.cantidad_compra, idProducto }),
            });

            if (!response.ok) {
                console.error('Error al actualizar la cantidad del producto en el carrito');
            }
        } catch (error) {
            console.error('Error al actualizar la cantidad del producto en el carrito:', error);
        }
    };

    // Agrupar productos por id_producto y sumar cantidades
    const groupedCarrito = carrito.reduce((acc, item) => {
        const existingItem = acc.find(i => i.id_producto === item.id_producto);
        if (existingItem) {
            existingItem.cantidad_compra += item.cantidad_compra;
            existingItem.subtotal = (existingItem.subtotal ?? 0) + (item.subtotal ?? 0);
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, [] as CarritoItem[]);

    return (
        <div className="flex justify-between font-koulen w-full p-8">
            {loading && <LoadingSpinner />}
            <div title="Articulos" className="m-2 p-2 rounded-md bg-gray-200 w-1/2 flex-grow p-5 px-10 ">
                <div id="header" className="text-gray-700 flex flex-row flex-nowrap justify-center items-baseline content-stretch">
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Resumen <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch">Envio <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch">Pago <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                </div>
                <h1 className="text-3xl text-gray-900 pb-5">Articulos</h1>

                <div id="PRODUCTOS" className="max-h-96 overflow-y-auto">
                {groupedCarrito.map((item) => (
                    <div key={item.id_prod_fact} id="product" className="bg-white rounded-md flex flex-row flex-nowrap justify-start items-start content-start overflow-hidden mb-5">
                        <div id="img" className="mr-8 w-1/12 h-auto rounded-none rounded-tl-md rounded-bl-md" title={item.nombre_prod}>
                            {item.url ? (
                                <img src={item.url} alt={item.nombre_prod} className="w-full h-full object-contain" />
                            ) : (
                                <CiImageOff className="w-full h-full object-contain text-gray-400" />
                            )}
                        </div>
                        <div id="detalle" className="flex flex-grow justify-between mr-8">
                            <div id="det" className="">
                                <h1 id="nombre" className="text-gray-700 text-lg">{item.nombre_prod}</h1>
                                <h4 id="cantidad" className="font-lekton text-gray-400">Cantidad: {item.cantidad_compra}</h4>
                                <div className="flex items-center border border-black rounded-full bg-gray-100 text-gray-700 font-lekton w-max">
                                    <button className="text-lg font-semibold px-2" onClick={() => handleQuantityChange(item.id_producto, -1)}>−</button>
                                    <span className="mx-4 text-lg">{item.cantidad_compra}</span>
                                    <button className="text-lg font-semibold px-2" onClick={() => handleQuantityChange(item.id_producto, 1)}>+</button>
                                </div>
                            </div>
                            <div id="precio" className="mt-8 flex flex-col flex-nowrap justify-start items-end content-stretch">
                                <h3 className="text-gray-700">{item.subtotal !== null ? `${item.subtotal} Lps` : 'No disponible'}</h3>
                                <button title="delete" onClick={() => handleDelete(item.id_producto)}>
                                    <FaRegTrashAlt className="text-gray-700 hover:text-red-700"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    

                    ))}
                </div>

                
            </div>

            <div title="Resumen orden" className="m-2 p-10 rounded-md bg-gray-200 flex flex-col flex-nowrap justify-between items-stretch content-stretch">
            <div id="hd1" className="flex flex-row flex-nowrap justify-between items-start content-start">
                 <div id="orden" className="mr-64 text-gray-800">
                     <h1 className="mb-3">Resumen de la orden</h1>
                     <div id="cantprod" className="max-h-52 overflow-y-auto w-auto">
                         {groupedCarrito.map((item) => (
                             <h2 key={item.id_prod_fact} className="mb-3">{item.cantidad_compra} x {item.nombre_prod}</h2>
                         ))}
                     </div>
                 </div>
                 <div id="pago" className="text-gray-800">
                     <h1>Pagos con</h1>
                     <button className="w-16 border-blue-900 rounded-md border-2 px-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px]">
                        <img title="paypal" src="/img/paypal-logo-0.png"  />
                    </button>
                 </div>
            </div>


                {/* 
                <div id="hd2" className="flex flex-col space-y-2">
                    <h3 className="text-gray-800 font-inter text-sm">CODIGO DE DESCUENTO</h3>
                    <div className="flex items-center space-x-2">
                      <input title="descuento" type="text" name="descuento" id="" className="flex-grow rounded-md border-none bg-gray-300 text-gray-700 mr-8" />
                      <button type="button" title="aplicar" className="border-purple-400 border-2 text-purple-400 font-inter py-2 px-5 rounded-md">Aplicar</button>
                    </div>
                </div>
                */}

                <div id="hd3" className="flex flex-row flex-nowrap justify-between items-start content-start mt-2 font-inter text-sm">
                    <div id="orden" className="mr-64 text-gray-800">
                        <h2 className="mb-3">Subtotal</h2>
                        <h2 className="mb-3">Impuestos</h2>
                        <h2 className="mb-3">Envio</h2>
                        <h2 className="mb-3">Total</h2>
                    </div>
                    <div id="pago" className="text-gray-800">
                        <h3 className="mb-3" id="subtotal">L. {subtotal.toFixed(2)}</h3>
                        <h3 className="mb-3" id="impuestos">L. {impuestos.toFixed(2)}</h3>
                        <h3 className="mb-3">...</h3>
                        <h3 className="mb-3" id="total">L. {total.toFixed(2)}</h3>
                    </div>
                 </div>

                 

                {/* BOTONES */}
                <div id="but" className="flex flex-row flex-nowrap justify-end items-end content-start">
                    <button title="decline" type="button" className="mr-8 text-gray-800 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] rounded-md">Cancelar Orden</button>
                    <button title="sending" type="button" className="bg-purple-400 py-4 px-9 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px]" onClick={handleShippingDetailsClick}>Detalles de envio</button>
                </div>
 
            </div>
        </div>
    );
}
