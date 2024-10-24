'use client'
import Navbar from 'components/navbar';
import PantallaCarga from '../components/pantallacarga';
import MaterialDetail from '../components/MaterialDetail';
import CarruselProductoRM from '../components/CarruselProductoRM';
import Footer from 'components/Footer';
import { useMaterial } from '@services/product';


export default function MaterialDetailPageDinamic() {
  const producto = useMaterial();

  if (!producto) {
    return <PantallaCarga/>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="bg-slate-50 flex-grow w-full">
      <div className="min-w-screen text-black bg-slate-50 flex items-center ml-24 mr-24 mt-[6%]">
      <MaterialDetail producto={producto} />
      </div>
      <div className="ml-24 max-w-full mr-24 mb-[5%]">
        <CarruselProductoRM/>
      </div>
      </main>
      <Footer />
    </div>
  );
}