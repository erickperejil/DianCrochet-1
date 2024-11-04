'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [correo, setCorreo] = useState<string | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('loginResponse');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const storedCorreo = parsedData?.query_result?.CORREO;
      console.log('Correo almacenado:', storedCorreo);
      setCorreo(storedCorreo || '');
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:4000/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const data = await response.json();
      console.log('URL de la imagen cargada:', data.imageUrl);
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    }
  };

  const actualizarFotoPerfil = async () => {
    if (!correo || !imageUrl) {
      console.error('Correo o URL de la imagen no disponible');
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:4000/user/actualizar/foto/${correo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nueva_url_imagen: imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile picture');
      }

      const result = await response.json();
      console.log('Resultado de la actualización:', result);
      onClose(); // Cerrar el modal después de confirmar
    } catch (error) {
      console.error('Error al actualizar la foto de perfil:', error);
      setError('Error al actualizar la foto de perfil');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h1 className="text-3xl font-koulen items-center text-gray-800 mb-6">Sube una Imagen </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {!imageUrl ? (
          <form onSubmit={handleSubmit} className="max-w-md">
            <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-3">
              Selecciona una imagen para poder subirla
            </label>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subir
            </button>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2"> Preview de la Imagen</h2>
            <Image 
              src={imageUrl} 
              alt="Uploaded image" 
              width={500}
              height={500}
              className="w-full max-w-[500px] rounded-lg shadow-lg border mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button 
                onClick={actualizarFotoPerfil}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Confirm
              </button>
              <button 
                onClick={onClose} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModal;
