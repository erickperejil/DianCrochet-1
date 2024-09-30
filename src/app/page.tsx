import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-500">
      <Link href="/login">Dashboard</Link>
      <h1 style={{fontFamily:"var(--lekton)"}}>Hola en lekton</h1>
    </div>
    
    
  );
}
