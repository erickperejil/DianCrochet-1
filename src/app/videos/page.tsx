'use client';
import VideoPage from './components/video'; 
import Navbar from 'components/navbar';
import Footer from 'components/Footer';
import QuantitySelector from 'app/product_detail/components/contador';

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">  
      <Navbar />  
      <main className="bg-slate-50 flex-grow w-full mt-10">
        <div className="flex  justify-center items-center mt-[40px]">
        <VideoPage/>
        </div>
        <div>
        <QuantitySelector/>
        </div>
      </main>

      <Footer />
    </div>
  );
}
