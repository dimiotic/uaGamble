import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const userPrefers = JSON.parse(localStorage.getItem('userPrefers'));
  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
  const [themeLight, setThemeLight] = useState(
    userPrefers ? userPrefers.themeLight : prefersLightScheme.matches
  );

  return (
    <ThemeContext.Provider
      value={{
        themeLight,
        setThemeLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
