'use client'
import React, { useState } from 'react';
import UploadModal from './components/change-pic';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button 
        onClick={openModal} 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Open Upload Modal
      </button>

      <UploadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ParentComponent;
