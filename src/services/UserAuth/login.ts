const API_URL = 'https://tu-backend.com/api'; 

// Función para hacer el POST del login
export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Error en el inicio de sesión');
  }

  return response.json(); 
};
