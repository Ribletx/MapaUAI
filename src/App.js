import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import BuildingMap from './components/BuildingMap';

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <BuildingMap />
      </div>
    </LanguageProvider>
  );
};

export default App;

// DONE