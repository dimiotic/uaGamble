import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext({
  themeLight: true,
  setThemeLight: () => {},
});
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [themeLight, setThemeLight] = useState(true);
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
