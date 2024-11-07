import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { CarritoItem, Departamento } from "@interfaces/invoice";
import axios from 'axios';

export default function ShippingForm() {
    const router = useRouter();
    const [subtotal, setSubtotal] = useState<number>(0); // Iniciar con 0, no null
    const [impuestos, setImpuestos] = useState<number>(0); // Iniciar con 0, no null
    const [carrito, setCarrito] = useState<CarritoItem[]>([]);
    const [correo, setCorreo] = useState('');
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [ciudades, setCiudades] = useState<{ ID_CIUDAD: number; CIUDAD: string }[]>([]);
    const [selectedCiudad, setSelectedCiudad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [envio, setEnvio] = useState<number>(0);
    const [direccionError, setDireccionError] = useState<string>('');
    const [ciudadError, setCiudadError] = useState<string>('');
    const [telefonoError, setTelefonoError] = useState<string>(''); 
    const [idFactura, setIdFactura] = useState<number | null>(null);
    const [total, setTotal] = useState<number | string>('No disponible');



    const handleBackClick = () => {
        router.back();
    };

    useEffect(() => {
        const storedData = localStorage.getItem('loginResponse');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setCorreo(parsedData.query_result.CORREO); 
        }
    }, []);

    useEffect(() => {
        const storedData = localStorage.getItem('facturaId');
        if (storedData) {
            setIdFactura(Number(storedData)); // Usamos el id de factura de localStorage
        }
    }, []);

    useEffect(() => {
        if (correo) {
            const fetchCarrito = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/factura/carrito/${correo}`);
                    const data = await response.json();
                    console.log('Datos del carrito:', data);
                    setCarrito(data.carrito);
                } catch (error) {
                    console.error('Error al obtener el carrito:', error);
                }
            };

            fetchCarrito();
        }
    }, [correo]);

    // Función para obtener el subtotal e impuestos
    const fetchSubtotal = async () => {
        try {
            const response = await fetch('http://localhost:4000/factura/carrito/subtotal', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo })  // Enviando el correo al backend
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Subtotal e impuestos recibidos:', data); // Verifica la respuesta del backend
                setSubtotal(data.subtotal);
                setImpuestos(data.impuesto);
            } else {
                console.error('Error al obtener el subtotal e impuestos desde el backend');
            }
        } catch (error) {
            console.error('Error al intentar obtener el subtotal e impuestos:', error);
        }
    };
    useEffect(() => {
        if (correo) {
            fetchSubtotal();  // Llama a fetchSubtotal cuando el correo esté disponible
        }
    }, [correo]);  // Dependencia en correo
    

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

    // Fetch ciudades cuando cambia el departamento seleccionado
    useEffect(() => {
        const fetchCiudades = async () => {
            if (selectedDepartamento) {
                try {
                    const response = await axios.get(`http://localhost:4000/factura/ciudad/${selectedDepartamento}`);
                    setCiudades(response.data.Ciudades);
                } catch (error) {
                    console.error("Error al obtener las ciudades:", error);
                }
            } else {
                setCiudades([]);
            }
        };

        fetchCiudades();
    }, [selectedDepartamento]);

    // Component to select department
    const DepartmentSelect = () => {
        const [departments, setDepartments] = useState<Departamento[]>([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchDepartments = async () => {
                try {
                    const response = await axios.get('http://localhost:4000/factura/departamentos');
                    setDepartments(response.data.Departamentos);
                    setLoading(false);
                } catch (error) {
                    // Manejo del error: solo dejamos que el estado 'loading' se quede como 'false'
                    console.error('Error fetching departments:', error);
                    setLoading(false);
                }
            };
    
            fetchDepartments();
        }, []);
    
        if (loading) return <p className="text-gray-400">Cargando...</p>;

        
        return (
            <select
                name="depto"
                id="depto"
                aria-label="depto"
                className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700"
                onChange={(e) => setSelectedDepartamento(e.target.value)}
                value={selectedDepartamento}
            >
                <option value="" disabled>Elegir departamento</option>
                {departments.map((dept) => (
                    <option key={dept.ID_DEPARTAMENTO} value={dept.ID_DEPARTAMENTO}>
                        {dept.DEPARTAMENTO}
                    </option>
                ))}
            </select>
        );
    };
     

    const handleSaveShipping = async () => {
        let isValid = true;
   
        // Validación de los campos
        if (!direccion) {
            setDireccionError('Por favor, ingresa una direccion');
            isValid = false;
        } else {
            setDireccionError('');
        }
   
        if (!selectedCiudad) {
            setCiudadError('Por favor, selecciona una ciudad');
            isValid = false;
        } else {
            setCiudadError('');
        }
   
        if (!telefono) {
            setTelefonoError('Por favor, ingresa un número de telefono');
            isValid = false;
        } else {
            setTelefonoError('');
        }
   
        if (!isValid) return;
   
        if (!idFactura) {
            console.error('El id de la factura no está disponible');
            return;
        }
   
        try {
            const response = await axios.post('http://localhost:4000/factura/envio', {
                id_factura: idFactura,
                direccion,
                ciudad: selectedCiudad,
                numero: telefono
            });
   
            console.log('Respuesta del servidor:', response);
   
            if (response.status === 201) {
                const envioData = response.data.envio;
                const envio = envioData?.envio ?? 0;
                const total = envioData?.total ?? 'No disponible'; // Aquí obtienes el total desde la respuesta
   
                setEnvio(envio);  // Asignamos el valor de 'envio' al estado
                setTotal(total);  // Aquí asignas el valor de 'total' al estado
   
                console.log('Envio:', envio);
                console.log('Total:', total);
            } else {
                console.error('Error al guardar el envío:', response);
                alert('Hubo un error al procesar el envío');
            }
   
        } catch (error) {
            console.error('Error al guardar el envío:', error);
            if (axios.isAxiosError(error)) {
                console.error('Detalles del error:', error.response?.data);
            }
            alert('Hubo un error al procesar el envío');
        }
    };   
    

    
    return (
        <div className="flex justify-between font-koulen w-full p-8">
            <div title="detalle envio" className="m-2 p-2 rounded-md bg-gray-200 w-1/2 flex-grow py-5 px-40 ">
            <div id="header" className="text-gray-700 flex flex-row flex-nowrap justify-center items-baseline content-stretch">
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Resumen <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-purple-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Envio <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2 flex flex-row flex-nowrap justify-start items-baseline content-stretch">Pago <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                </div>

                <h1 className="text-2xl text-gray-900 pb-5">Detalles de envio</h1>

                <div className="flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5">
                    <h1 className="text-gray-900">Direccion</h1>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="Escribe direccion"
                        className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700"
                    />
                    {direccionError && <p className="text-red-500 text-sm mt-1 flex flex-row flex-nowrap justify-start items-stretch content-stretch"><RiErrorWarningFill className="mr-1" />{direccionError}</p>}
                </div>

                <div className="flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5">
                    <h1 className="text-gray-900">Departamento</h1>
                    <DepartmentSelect />
                </div>

                    <div className="flex flex-col flex-nowrap justify-start items-stretch content-stretch mb-5">
                        <h1 className="text-gray-900">Ciudad</h1>
                        <select
                            aria-label="ciudad"
                            className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700 w-full"
                            value={selectedCiudad} // Aquí usamos el valor del estado
                            onChange={(e) => setSelectedCiudad(e.target.value)} // Actualiza el estado al seleccionar
                        >
                            <option value="" disabled>Elegir ciudad</option>
                            {ciudades.map((ciudad) => (
                                <option key={ciudad.ID_CIUDAD} value={ciudad.ID_CIUDAD}>
                                    {ciudad.CIUDAD}
                                </option>
                            ))}
                        </select>
                        {ciudadError && <p className="text-red-500 text-sm mt-1 flex flex-row flex-nowrap justify-start items-stretch content-stretch"><RiErrorWarningFill className="mr-1" />{ciudadError}</p>}
                    </div>

                <div className="mb-5">
                    <h1 className="text-gray-900">Numero</h1>
                    <input
                        type="number"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ingresa tu teléfono"
                        className="rounded-md bg-gray-300 border-none h-12 font-lekton text-gray-700"
                    />
                    {telefonoError && <p className="text-red-500 text-sm mt-1 flex flex-row flex-nowrap justify-start items-stretch content-stretch"><RiErrorWarningFill className="mr-1" />{telefonoError}</p>}
                </div>

                <button onClick={handleBackClick} className="text-gray-800 p-4 flex items-center transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-md">
                    <FaAngleLeft className="mr-1"/> Volver
                </button>
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
                        <h3 className="mb-3" id="subtotal">L. {carrito.length === 0 ? "0.00" : subtotal.toFixed(2)}</h3>
                        <h3 className="mb-3" id="impuestos">L. {carrito.length === 0 ? "0.00" : impuestos.toFixed(2)}</h3>
                        <h3 className="mb-3">L. {envio && !isNaN(envio) ? envio.toFixed(2) : "0.00"}</h3>
                        <h3 className="mb-3" id="total">
                            L. {total === 'No disponible' ? total : (subtotal + impuestos + (envio && !isNaN(envio) ? envio : 0)).toFixed(2)}
                        </h3>
                    </div>
                 </div>

                <div className="flex justify-end">
                    <button onClick={handleSaveShipping} className="bg-purple-400 py-4 px-9 rounded-md">Guardar envio</button>
                </div>
            </div>
        </div>
    );
}
