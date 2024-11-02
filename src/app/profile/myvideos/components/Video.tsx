import Image from 'next/image';
import Sheep from './sheepIcon';
export default function Video({ nombre, dificultad, imagen }: { nombre: string; dificultad: string; imagen: string }) {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full cursor-pointer">
        <div className='w-full h-[75%] relative overflow-hidden'>
          <Image
            src={imagen}
            alt={nombre}
            layout="fill" // Esto hace que la imagen ocupe todo el espacio disponible
            className="rounded-t-lg object-cover" // Ajusta la imagen al contenedor sin distorsionar
          />
        </div>
        <div className="p-1 px-2 text-left h-[25%] flex flex-col">
          <h3 className="text-sm font-koulen text-[#424242]">{nombre}</h3>
          <div className="flex items-center">
            <h3 className="text-sm font-koulen text-gray-500 mt-1">Dificultad: {dificultad}</h3>
            {dificultad=="Principiante"?(
              <div className='ml-2'>
               <Sheep
               color="#E1C700"
               />
               </div>
            ):(dificultad=="Intermedio")?(
              <div className='ml-2'>
              <Sheep
              color="#4CAF50"
              />
              </div>
            ):(
              <div className='ml-2'>
              <Sheep
              color="#FF6F61"
              />
              </div>)}
          </div>
          
        </div>
      </div>
    );
  }