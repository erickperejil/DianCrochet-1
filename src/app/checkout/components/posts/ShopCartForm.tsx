import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ShopCartForm() {
    return (
        <div className="flex justify-between font-koulen w-full p-8">
            <div className="m-2 p-2 rounded-md bg-gray-200 w-1/2 flex-grow p-5 px-10">
                <div id="header" className="text-gray-700 flex flex-row flex-nowrap justify-center items-baseline content-stretch">
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Resumen <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch">Envio <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch">Pago <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                </div>
                <h1 className="text-4xl text-gray-900 pb-5">Articulos</h1>

                {/* PRODUCTO 1  */}
                <div id="product" className="bg-white rounded-md flex flex-row flex-nowrap justify-start items-start content-start overflow-hidden mb-5">
                    
                    <div id="img" className="mr-8 w-1/12 h-auto rounded-none rounded-tl-md rounded-bl-md">
                        <img src="/img/imagen34.svg" alt="" className="w-full h-full object-contain" />
                    </div>
                    
                    <div id="detalle" className="flex flex-grow justify-between mr-8">

                        <div id="det" className="">
                            <h1 id="nombre" className="text-gray-700 text-lg">Nombre Producto</h1>
                            <h4 id="cantidad" className="font-lekton text-gray-400">Cantidad</h4>
                            
                            <div className="flex items-center border border-black rounded-full bg-gray-100 text-gray-700 font-lekton w-max">
                                <button className="text-lg font-semibold px-2">−</button>
                                <span className="mx-4 text-lg">1</span>
                                <button className="text-lg font-semibold px-2">+</button>
                            </div>

                        </div>

                        <div id="precio" className="mt-8 flex flex-col flex-nowrap justify-start items-end content-stretch">
                            <h3 className="text-gray-700">00.00 Lps</h3>
                            <FaRegTrashAlt className="text-gray-700"/>
                        </div>

                    </div>
                </div>

                {/* PRODUCTO 2 */}
                <div id="product" className="bg-white rounded-md flex flex-row flex-nowrap justify-start items-start content-start overflow-hidden mb-5">
                    
                    <div id="img" className="mr-8 w-1/12 h-auto rounded-none rounded-tl-md rounded-bl-md">
                        <img src="/img/imagen34.svg" alt="" className="w-full h-full object-contain" />
                    </div>
                    
                    <div id="detalle" className="flex flex-grow justify-between mr-8">

                        <div id="det" className="">
                            <h1 id="nombre" className="text-gray-700 text-lg">Nombre Producto</h1>
                            <h4 id="cantidad" className="font-lekton text-gray-400">Cantidad</h4>
                            
                            <div className="flex items-center border border-black rounded-full bg-gray-100 text-gray-700 font-lekton w-max">
                                <button className="text-lg font-semibold px-2">−</button>
                                <span className="mx-4 text-lg">1</span>
                                <button className="text-lg font-semibold px-2">+</button>
                            </div>

                        </div>

                        <div id="precio" className="mt-8 flex flex-col flex-nowrap justify-start items-end content-stretch">
                            <h3 className="text-gray-700">00.00 Lps</h3>
                            <FaRegTrashAlt className="text-gray-700"/>
                        </div>

                    </div>
                </div>


                {/* PRODUCTO 3 */}
                <div id="product" className="bg-white rounded-md flex flex-row flex-nowrap justify-start items-start content-start overflow-hidden mb-5">
                    
                    <div id="img" className="mr-8 w-1/12 h-auto rounded-none rounded-tl-md rounded-bl-md">
                        <img src="/img/imagen34.svg" alt="" className="w-full h-full object-contain" />
                    </div>
                    
                    <div id="detalle" className="flex flex-grow justify-between mr-8">

                        <div id="det" className="">
                            <h1 id="nombre" className="text-gray-700 text-lg">Nombre Producto</h1>
                            <h4 id="cantidad" className="font-lekton text-gray-400">Cantidad</h4>
                            
                            <div className="flex items-center border border-black rounded-full bg-gray-100 text-gray-700 font-lekton w-max">
                                <button className="text-lg font-semibold px-2">−</button>
                                <span className="mx-4 text-lg">1</span>
                                <button className="text-lg font-semibold px-2">+</button>
                            </div>

                        </div>

                        <div id="precio" className="mt-8 flex flex-col flex-nowrap justify-start items-end content-stretch">
                            <h3 className="text-gray-700">00.00 Lps</h3>
                            <FaRegTrashAlt className="text-gray-700"/>
                        </div>

                    </div>
                </div>

                {/* PRODUCTO 4 */}
                <div id="product" className="bg-white rounded-md flex flex-row flex-nowrap justify-start items-start content-start overflow-hidden mb-5">
                    
                    <div id="img" className="mr-8 w-1/12 h-auto rounded-none rounded-tl-md rounded-bl-md">
                        <img src="/img/imagen34.svg" alt="" className="w-full h-full object-contain" />
                    </div>
                    
                    <div id="detalle" className="flex flex-grow justify-between mr-8">

                        <div id="det" className="">
                            <h1 id="nombre" className="text-gray-700 text-lg">Nombre Producto</h1>
                            <h4 id="cantidad" className="font-lekton text-gray-400">Cantidad</h4>
                            
                            <div className="flex items-center border border-black rounded-full bg-gray-100 text-gray-700 font-lekton w-max">
                                <button className="text-lg font-semibold px-2">−</button>
                                <span className="mx-4 text-lg">1</span>
                                <button className="text-lg font-semibold px-2">+</button>
                            </div>

                        </div>

                        <div id="precio" className="mt-8 flex flex-col flex-nowrap justify-start items-end content-stretch">
                            <h3 className="text-gray-700">00.00 Lps</h3>
                            <FaRegTrashAlt className="text-gray-700"/>
                        </div>

                    </div>
                </div>               

                
            </div>

            <div className="m-2 p-10 rounded-md bg-gray-200 flex flex-col flex-nowrap justify-between items-stretch content-stretch">
                <div id="hd1" className="flex flex-row flex-nowrap justify-between items-start content-start">
                <div id="orden" className="mr-64 text-gray-800">
                    <h1 className="mb-3">Resumen de la orden</h1>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                </div>
                <div id="pago" className="text-gray-800">
                    <h1>Pagos con</h1>
                    <img title="paypal" src="/img/paypal-logo-0.png" className=" w-16 border-blue-900 rounded-md border-2 px-3"  />
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
                    <h3 className="mb-3">L. 316.00</h3>
                    <h3 className="mb-3">L. 3.00</h3>
                    <h3 className="mb-3">...</h3>
                    <h3 className="mb-3">L. 319.00</h3>
                </div>
                </div> 

                {/* BOTONES */}
                <div id="but" className="flex flex-row flex-nowrap justify-end items-end content-start">
                    <button title="decline" type="button" className="mr-8 text-gray-800 p-4">Cancelar Orden</button>
                    <button title="sending" type="button" className="bg-purple-400 py-4 px-9 rounded-md">Detalles de envio</button>
                </div>
 
            </div>
        </div>
    );
}
