const API_URL = "http://localhost:4000/user";

export const getFacturas = async(correo:string)=>{
    const res = await fetch(`${API_URL}/facturas/${correo}`);
    if (!res.ok) {
      throw new Error("Error al traer facturas");
    }
    const data = await res.json();
    return data;
  }

  export const getVideosUsuario = async (correo: string, col: string, dir: string)=>{
    const response = await fetch(`${API_URL}/tutoriales/${correo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        columna_ordenamiento: col,
        direccion_ordenamiento: dir,
      }),
    });

    console.log(JSON.stringify({
      columna_ordenamiento: col,
      direccion_ordenamiento: dir,
    }))
  
    if (!response.ok) {
      throw new Error("Error al traer videos");
    }
  
    const data = await response.json();
    return data;
  };
  