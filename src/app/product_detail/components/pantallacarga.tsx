
import Footer from "components/Footer";
import Navbar from "components/navbar";


export default function PantallaCarga() {
    return (
      <div className="w-full min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="bg-slate-50 flex-grow w-full flex justify-center">
        </main>
        <Footer />
      </div>
    );
  }