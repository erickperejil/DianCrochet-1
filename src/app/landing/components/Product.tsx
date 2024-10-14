import React from 'react';
import Image from 'next/image';

export default function Product({ nombre, precio, imagen }: { nombre: string; precio: string; imagen: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[full] h-[full]">
      <Image
        src={imagen}
        alt={nombre}
        width={260}
        height={305}
        className="rounded-t-lg"
      />
      <div className="p-2 text-left">
        <h3 className="text-sm font-koulen text-gray-800">{nombre}</h3>
        <p className="text-sm font-koulen text-gray-500 mt-1">{precio}</p>
      </div>
    </div>
  );
}
