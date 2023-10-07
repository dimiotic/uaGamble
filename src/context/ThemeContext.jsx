import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  themeLight: true,
  setThemeLight: () => {},
});
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
  const [themeLight, setThemeLight] = useState(true);
  const userPrefers = JSON.parse(localStorage.getItem('userPrefers'));

  useEffect(() => {
    if (userPrefers) {
      setThemeLight(userPrefers.themeLight);
      return;
    }
    setThemeLight(prefersLightScheme.matches);
  }, [prefersLightScheme.matches, userPrefers]);
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
