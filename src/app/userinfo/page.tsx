'use client';

import Navbar from 'components/navbar';

export default function Dashboard() {
    return (
        <div className="w-full h-screen flex flex-col bg-slate-50">  
            <Navbar />
            {/* <Componente Tuyo va aqui /> */}
            <div className="flex-grow">
                {/* Aquí puedes agregar el contenido principal del Dashboard */}
            </div>
        </div>
    );
}

