// CafeteriaDetail.js
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import products from '../data/menu.json'; // Ruta relativa al archivo JSON

const CafeteriaDetail = ({ onBackClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const { translations, language } = useLanguage();

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader
        onHomeClick={onBackClick}
        onBackClick={onBackClick}
        showBackButton={true}
      />

      <main className="flex-grow bg-white p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Cofee Time</h2>

        {/* Contenedor dividido */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
          {/* Menú y buscador */}
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder={translations[language].searchProduct}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4"
            />

            <ul className="space-y-2">
              {filteredProducts.map((product, index) => (
                <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
                  <span>{product.name}</span>
                  <div className="flex items-center space-x-2">
                    <span>${product.price.toLocaleString()}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                        {translations[language].AddCar}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen del menú */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/MenuCofee.png"
              alt="Menú del casino"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Simulador de precios */}
        <div className="w-full max-w-2xl mt-8 p-4 border rounded-lg shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">{translations[language].summary}</h3>

          <div className="max-h-64 overflow-y-auto mb-4">
            {cart.length === 0 ? (
              <p>{translations[language].NotAdded}</p>
            ) : (
              <ul className="space-y-1">
                {cart.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span>${item.price.toLocaleString()}</span>
                      <button
                        onClick={() => removeFromCart(i)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs"
                      >
                        {translations[language].eliminate}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="font-bold text-lg">Total: ${total.toLocaleString()}</p>

          <button
            onClick={clearCart}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {translations[language].pay}
          </button>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default CafeteriaDetail;
