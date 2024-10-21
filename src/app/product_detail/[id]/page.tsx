'use client'

import Navbar from 'components/navbar';
import Footer from 'components/Footer';
import CarruselProducto from '../components/CarruselProducto';
import { useProducto } from '@services/product';
import ProductDetail from '../components/ProductDetail';

export default function ProductDetailPageDinamic() {
  const producto = useProducto();

  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="bg-slate-50 flex-grow w-full">
      <div className="min-w-screen text-black bg-slate-50 flex items-center ml-24 mr-24 mt-[75px]">
      <ProductDetail producto={producto} />
      </div>
      <div className="ml-24 max-w-full mr-24">
        <CarruselProducto />
      </div>
      </main>
      <Footer />
    </div>
  );
}