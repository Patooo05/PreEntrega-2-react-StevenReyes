import React, { createContext, useState } from 'react';

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false); // Estado para controlar el tema oscuro

  return (
    <Theme.Provider value={{ dark, setDark }}>
      {children}
    </Theme.Provider>
  );
};
