'use client';

import { useTheme } from 'next-themes';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Crée le contexte
const DrawerContext = createContext<{
    isOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
} | undefined>(undefined);

// Provider du contexte
export const DrawerProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = useTheme();

    /**
     * Toggle drawer state between open and close.
    */
    const toggleDrawer = () => setIsOpen((prev) => !prev);

    /**
     * Close the drawer.
    */
    const closeDrawer = () => setIsOpen(false);

    /**
     * Toggle dark mode and store preference in localStorage.
    */
    const toggleDarkMode = () => {
      const themeString = isDarkMode ? 'light' : 'dark';
      localStorage.setItem('theme', themeString);
      setIsDarkMode(!isDarkMode);
      theme.setTheme(themeString);
    };

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      const needsDarkMode = !storedTheme || storedTheme === 'dark';
      
      setIsDarkMode(needsDarkMode);
      theme.setTheme(needsDarkMode ? 'dark' : 'light');
    }, []);

    return (
      <DrawerContext.Provider value={{ isOpen, toggleDrawer, closeDrawer, isDarkMode, toggleDarkMode }}>
        {children}
      </DrawerContext.Provider>
    );
};

// Hook pour utiliser le contexte facilement
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
