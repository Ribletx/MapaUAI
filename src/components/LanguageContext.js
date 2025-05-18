import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      headerTitle: 'Mapa Interactivo UAI',
      searchPlaceholder: 'Buscar habitación...',
      homeButton: 'Inicio',
      backButton: 'Atrás',
      footerText: 'Mapa UAI © 2025',
      studyRoom: 'Sala de Estudio',
      bathroom: 'Baños',
      
      cafeteria: 'Casino',
      AddCar: 'Agregar',
      searchProduct: 'Buscar producto...',
      summary:'Resumen del pedido',
      NotAdded: 'No has agregado productos.',
      eliminate: 'Eliminar',
      pay: 'Pagar',

      studyRoomDesc: 'Espacio silencioso para estudio individual o grupal con mesas y pizarras.',
      s104: 'Sala 104, sala core con mesa redonda y proyector.',
      bathroomDesc: 'Modernos y espaciosos, con acceso para personas con movilidad reducida.'
    },
    en: {
      headerTitle: 'UAI Interactive Map',
      searchPlaceholder: 'Search room...',
      homeButton: 'Home',
      backButton: 'Back',
      footerText: 'UAI Map © 2025',
      studyRoom: 'Study Room',
      bathroom: 'Restrooms',
      
      cafeteria: 'Cafeteria',
      AddCar: "Add",
      searchProduct: 'Search product...',
      summary:'Order summary',
      NotAdded: 'You have not added products.',
      eliminate: 'Eliminate',
      pay: 'Pay',

      studyRoomDesc: 'Quiet space for individual or group study with tables and blackboards.',
      s104: 'Room 104, core room with round table and projector.',
      bathroomDesc: 'Modern and spacious, with access for people with reduced mobility.'
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};