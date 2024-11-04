"use client";
import EmailAuthFormChangePSW from "../../profile/change-psw/components/EmailCodeFormChangepsw";



export default function ResetPsw() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden bg-white">
      <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16 bg-white">
        <div className="z-20 flex h-[80.4%] w-[25.7%] items-center justify-center">
          <EmailAuthFormChangePSW title="CAMBIAR CLAVE" />
        </div>
      </section>
    </main>
  );
}
