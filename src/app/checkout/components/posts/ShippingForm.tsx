import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import PhoneNumberInput from "../inputs/PhoneNumberInput";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { CarritoItem , Departamento } from "@interfaces/invoice";
import axios from 'axios';


export default function ShippingForm() {
    const router = useRouter();
    const [subtotal, setSubtotal] = useState(0);
    const [impuestos, setImpuestos] = useState(0);
    const [total, setTotal] = useState(0);
    const [carrito, setCarrito] = useState<CarritoItem[]>([]);
    const [correo, setCorreo] = useState('');

const handleBackClick = () => {
  router.back();
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

//obtener deptos
const DepartmentSelect = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(''); // Inicializa como cadena vacía
  
    useEffect(() => {
      const fetchDepartments = async () => {
        try {
          const response = await axios.get('http://localhost:4000/factura/departamentos');
          setDepartments(response.data.Departamentos);
          setLoading(false);
        } catch (error) {
          setError('Error fetching departments');
          setLoading(false);
        }
      };
  
      fetchDepartments();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="flex justify-between font-koulen w-full p-8">
            <div title="detalle envio" className="m-2 p-2 rounded-md bg-gray-200 w-1/2 flex-grow py-5 px-40 ">
                <div id="header" className="text-gray-700 flex flex-row flex-nowrap justify-center items-baseline content-stretch">
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Resumen <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-purple-400" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Envio <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch">Pago <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                </div>
                <h1 className="text-2xl text-gray-900 pb-5">Detalles de envio</h1>

                 {/* Direccion  */}
                 <div id="product" className=" flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5">
                    <h1 className="text-gray-900">Direccion</h1>
                    <input type="text" title="direccion" placeholder="Escribe direccion" aria-label="direccion" className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700"/>
                </div>

                {/* Depto */}
                <div id="product" className="flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5">
                    <h1 className="text-gray-900">Departamento</h1>
                    <select name="depto" id="depto" aria-label="depto" className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700">
                    <option value="" className="placeholder-slate-400" disabled selected>Elegir departamento</option>
                    {departments.map((dept) => (
                    <option key={dept.ID_DEPARTAMENTO} value={dept.DEPARTAMENTO}>{dept.DEPARTAMENTO}</option>
                    ))}
                    </select>
                </div>
                

                {/* Ciudad y envio  */}
                <div id="product" className=" flex flex-row flex-nowrap justify-between items-stretch content-stretch mb-5">
                    <div id="city" className="w-2/5">
                        <h1 className="text-gray-900">Ciudad</h1>
                        <select name="" id="" aria-label="depto" className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700 w-full">
                            <option value="" disabled selected className="text-gray-400">Elegir ciudad</option>
                            <option value="coxen_hole">Coxen Hole</option>
                            <option value="french_harbor">French Harbor</option>
                            <option value="west_end">West End</option>
                            <option value="west_bay">West Bay</option>
                            <option value="sandy_bay">Sandy Bay</option>
                            <option value="utila">Utila</option>
                            <option value="guanaja">Guanaja</option>
                            <option value="oak_ridge">Oak Ridge</option>
                            <option value="punta_gorda">Punta Gorda</option>
                        </select>
                        </div>

                    <div id="seding" className="w-1/2">
                        <h1 className="text-gray-900">Seleccionar envio</h1>
                        <select name="" id="" aria-label="depto" className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700 w-full">
                            <option value="" disabled selected className="text-gray-400">Elegir envio</option>
                            <option value="estandar">Envio estandar</option>
                    </select>
                    </div>
                </div>

                 {/* celular  */}
                 <div id="product" className=" flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5 w-full">
                    <h1 className="text-gray-900">Numero</h1>
                    <div className="w-full">
                    <PhoneNumberInput  onPhoneNumberChange={(phone: Phone) => {//+
                             // Handle phone number change//+
                         }}/>/
                    </div>
                    
                </div>  

                {/* BOTONES */}
                <div id="but" className="flex flex-row flex-nowrap justify-start items-stretch content-start">
                    <button title="decline" type="button" className="text-gray-800 p-4 flex items-center transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] rounded-md" onClick={handleBackClick}>
                      <FaAngleLeft className="mr-1"/> Volver
                    </button>
                </div>      

                
            </div>

            <div title="orden" className="m-2 p-10 rounded-md bg-gray-200 flex flex-col flex-nowrap justify-between items-stretch content-stretch">
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
                    <button title="decline" type="button" className="mr-8 text-gray-800 p-4">Cancelar Orden</button>
                    <button title="sending" type="button" className="bg-purple-400 py-4 px-9 rounded-md">Pagar</button>
                </div>
 
            </div>
        </div>
    );
}}
