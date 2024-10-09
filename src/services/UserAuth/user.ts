import { loginData, RegisterData, verifyCode } from "@interfaces/user";

const API_URL = "http://localhost:4000/user";

// Función para hacer el POST del login
export const login = async (data: loginData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error en el inicio de sesión");
  }

  return response.json();
};

export const register = async (data: RegisterData) => {
  const response = await fetch(`${API_URL}/crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log('registro completado')
  if (!response.ok) {
    throw new Error("Error al iniciar registro");
  }

  return response.json();
};

export const verifyEmailRegister = async (data: verifyCode) => {
  const response = await fetch(`${API_URL}/validar/registro`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al verificar codigo");
  }

  return response.json();
};

export const resendCode = async(correo: string) =>{
  const response = await fetch(`${API_URL}/nuevo/codigo`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo }),
  });
  console.log("json: ",  JSON.stringify({ correo }))

  if (!response.ok) {
    throw new Error("Error al verificar codigo");
  }

  return response.json();
}


//Restablecer contraseña
//enviar correo 

export const resetPassword = async (correo: string) => {
  const response = await fetch(`${API_URL}/correo/restablecer/contrasena`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo }),
  });

  if (!response.ok) {
    throw new Error("Error al restablecer la contraseña");
  }

  return response.json();
};
