import "../globals.css";

export default function Login() {
  return (
    <main className="imagenfondo flex h-screen w-full flex-col bg-slate-50">
      <section className="flex h-[90%] w-full items-center justify-center">
        <div className="relative h-[78.4%] w-[26.7%] rounded-xl border border-green-400">
          <div className="absolute top-[5.3%] h-[12.5%] w-full border border-blue-500"></div>
          <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center border border-orange-500">
            <div className="absolute h-full w-[88.1%] border border-green-500"></div>
          </div>
          <div className="absolute top-[39.5%] flex h-[10.6%] w-full justify-center border border-orange-500">
            <div className="absolute h-full w-[88.1%] border border-green-500"></div>
          </div>
          <div className="absolute h-[3%] top-[53.57%] w-full border border-red-800"></div>
          <div className="absolute w-full h-[10.19%] top-[69.34%] flex justify-center">
            <button className="absolute w-[56.61%] h-full bg-[#E72F63] rounded-xl"></button>
          </div>
          <div className="h-[6.1%] w-[50%] absolute top-[82%] left-[25%] border border-red-500">
          <h1 className="text-[#535353] text-base textoRegistro" style={{fontFamily:"var(--lekton)"}}>¿No tienes una cuenta? <h1 className="underline decoration-slate-900">Regístrate aquí</h1></h1>
          </div>
          
        </div>
      </section>
    </main>
  );
}
