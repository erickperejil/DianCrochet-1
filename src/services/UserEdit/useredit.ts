import { User, ActualizarUser } from '@interfaces/user';

export const fetchUser = async (correo: string): Promise<User | null> => {
  try {
    const response = await fetch(`http://localhost:4000/user/detalle/${correo}`);
    const data = await response.json();

    if (data?.Usuario) {
      return data.Usuario;
    } else {
      console.error("No se encontró información del usuario en la respuesta.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    return null;
  }
};

export const updateUser = async (correo: string, formData: ActualizarUser): Promise<User | null> => {
    try {
        const response = await fetch(`http://localhost:4000/user/actualizar/${correo}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            // Muestra el status y texto de error para investigar
            console.error(`Error: ${response.status} - ${response.statusText}`);
            const errorText = await response.text();
            console.error('Response text:', errorText);
            return null;
        }

        const updatedUser = await response.json();
        return updatedUser;
    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        return null;
    }
};
