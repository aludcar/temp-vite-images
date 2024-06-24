import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchQueryValue, setSearchQueryValue] = useState('dog');
  const newDarkTheme = !isDarkTheme;

  const handleToggleDarkTheme = () => {
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme)
  };

  return (
    <AppContext.Provider value={{ 
      isDarkTheme, 
      handleToggleDarkTheme,
      searchQueryValue,
      setSearchQueryValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(AppContext);
