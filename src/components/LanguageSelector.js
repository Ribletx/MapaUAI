import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select 
      value={language}
      onChange={handleLanguageChange}
      className="ml-4 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
};

export default LanguageSelector;