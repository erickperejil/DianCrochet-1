"use client";
import Navbar from "components/navbar";
import PayForm from "../components/posts/PayForm";


export default function Payments() {
    return (
      <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
        <Navbar/>
        <section className="imagen relative flex h-[92%] w-full items-center justify-center mt-16">
          <PayForm />
         
        </section>
      </main>
    );
  }
  