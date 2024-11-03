// UserProfile.tsx

import React, { useEffect, useState } from 'react';
import { User } from '@interfaces/user';
import { fetchUser, updateUser } from '@services/UserEdit/useredit';
import { ActualizarUser } from '@interfaces/user';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<ActualizarUser>({
    Nuevo_nombre: '',
    Nuevo_apellido: '',
    Nuevo_genero: '',
    Nuevo_telefono: '',
    Nuevo_fechaNacimiento: ''
  });

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem('loginResponse') || '{}');
    const correo = loginResponse.query_result?.CORREO || '';

    if (!correo) {
      console.error("Correo no encontrado en el almacenamiento local.");
      return;
    }

    const loadUser = async () => {
      const userData = await fetchUser(correo);
      if (userData) {
        setUser(userData);
        setFormData({
          Nuevo_nombre: userData.nombre,
          Nuevo_apellido: userData.apellido,
          Nuevo_genero: userData.genero,
          Nuevo_telefono: userData.telefono,
          Nuevo_fechaNacimiento: userData.fecha_nacimiento
        });
      }
    };

    loadUser();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!user) return;
  
    const updatedUser = await updateUser(user.correo, formData);
    if (updatedUser) {
      setUser(updatedUser);
      setEditing(false);
      window.location.reload(); // Recarga la página después de guardar
    } else {
      console.error("No se pudo actualizar la información del usuario.");
    }
  };
  
  
  

  const handleCancel = () => {
    setEditing(false);
    if (user) {
      setFormData({
        Nuevo_nombre: user.nombre,
        Nuevo_apellido: user.apellido,
        Nuevo_genero: user.genero,
        Nuevo_telefono: user.telefono,
        Nuevo_fechaNacimiento: user.fecha_nacimiento
      });
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-koulen mb-4 text-black">Perfil de Usuario</h2>
      
      {/* Nombre */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">NOMBRE:</label>
        <input
          type="text"
          name="Nuevo_nombre"
          value={editing ? formData.Nuevo_nombre : user?.nombre || ''}
          onChange={handleInputChange}
          disabled={!editing}
          className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
        />
      </div>

      {/* Apellido */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">APELLIDO:</label>
        <input
          type="text"
          name="Nuevo_apellido"
          value={editing ? formData.Nuevo_apellido : user?.apellido || ''}
          onChange={handleInputChange}
          disabled={!editing}
          className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
        />
      </div>

      {/* Teléfono */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">TELÉFONO:</label>
        <input
          type="text"
          name="Nuevo_telefono"
          value={editing ? formData.Nuevo_telefono : user?.telefono || ''}
          onChange={handleInputChange}
          disabled={!editing}
          className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
        />
      </div>

      {/* Correo */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">CORREO:</label>
        <input
          type="text"
          name="correo"
          value={user?.correo || ''}
          disabled
          className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
        />
      </div>

      {/* Fecha de Nacimiento */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">FECHA DE NACIMIENTO:</label>
        <input
          type={editing ? 'date' : 'text'}
          name="Nuevo_fechaNacimiento"
          value={editing ? formData.Nuevo_fechaNacimiento : user?.fecha_nacimiento || ''}
          onChange={handleInputChange}
          disabled={!editing}
          className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
        />
      </div>

      {/* Género */}
      <div className="flex items-center mb-2">
        <label className="w-1/3 font-semibold text-gray-600">GÉNERO:</label>
        {editing ? (
          <select
            name="Nuevo_genero"
            value={formData.Nuevo_genero}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
          >
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        ) : (
          <input
            type="text"
            name="Nuevo_genero"
            value={user?.genero || ''}
            disabled
            className="w-full px-3 py-2 rounded bg-gray-200 text-gray-700 outline-none"
          />
        )}
      </div>

      {/* Botones de Acción */}
      <div className="flex space-x-4 mt-6">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Guardar Información
            </button>
            <button
              onClick={handleCancel}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            >
              Editar Información
            </button>
            <button
              onClick={() => alert('Función de cambiar contraseña')}
              className="w-full bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            >
              Cambiar Contraseña
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
