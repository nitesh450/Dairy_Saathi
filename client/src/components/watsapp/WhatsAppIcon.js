import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppForm from './WhatsAppForm';
import './WhatsAppIcon.css';
const WhatsAppIcon = () => {
  const [showForm, setShowForm] = useState(false);
  const handleIconClick = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className="whatsapp-icon-container">
        <FaWhatsapp size={50} color="green" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
        {showForm && <WhatsAppForm onClose={handleCloseForm} />}
      </div>
    </>
  );
};
export default WhatsAppIcon;
