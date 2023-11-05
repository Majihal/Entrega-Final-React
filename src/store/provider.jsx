import React, { useState } from 'react';
import cartContext from './cartContext';

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState({
      listaDeProductos: [], 
      total: 0, 
    });

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default UserProvider;