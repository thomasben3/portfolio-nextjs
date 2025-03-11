'use client';

import { useState, useEffect } from 'react';
import MenuSvg from '../MenuSvg/MenuSvg';
import { Switch } from '@heroui/switch';
import { useTheme } from 'next-themes';
import LanguageDropdown from './LanguageDropDown';
import { useTranslations } from 'next-intl';
import DrawerTile from './DrawerTile';
import { Link } from '@/src/i18n/navigation';


/**
 * The drawer component.
 * It contains the navigation links and the settings.
*/
const Drawer = () => {

  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();

  const drawerDict = useTranslations("drawer");

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isOpen = localStorage.getItem('drawerOpen');
    
    setIsOpen(isOpen === 'true');
    const needsDarkMode = !storedTheme || storedTheme === 'dark';
    setIsDarkMode(needsDarkMode);
    theme.setTheme(needsDarkMode ? 'dark' : 'light');
  }, []);

  // Toggle drawer state
  const toggleDrawer = () => {
    if (isOpen) {
      localStorage.removeItem('drawerOpen');
    } else {
      localStorage.setItem('drawerOpen', 'true');
    }
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    localStorage.removeItem('drawerOpen');
    setIsOpen(false);
  };

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    const themeString = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', themeString);
    setIsDarkMode(!isDarkMode);
    theme.setTheme(themeString);
  };

  if (isOpen === null) {
    // Wait for the effect to set the initial state to avoid showing unwanted animations
    return null;
  }

  return (
    <div className="relative z-50">
      {/* Drawer itself */}
      <div
        className={`fixed top-0 left-0 w-64 h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--drawer-background)' }}
      >
        <div className="pt-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="pl-4 text-xl mb-4">{ drawerDict("menu") }</h2>
            <hr className="border-gray-700" />
            <ul>
              <Link href="/"><DrawerTile>{ drawerDict("home") }</DrawerTile></Link>
              <Link href="/documents"><DrawerTile>{ drawerDict("documents") }</DrawerTile></Link>
              <Link href="/contact"><DrawerTile>{ drawerDict("contact") }</DrawerTile></Link>
            </ul>
          </div>
          <div>
            <h2 className="pl-4 text-xl mb-4">{ drawerDict("settings") }</h2>
            <hr className="border-gray-700" />
            <ul className='space-y-4 p-4'>
              <li className="flex items-center justify-between">
                <span>{drawerDict("darkMode")}</span>
                <Switch isSelected={isDarkMode} onChange={toggleDarkMode} />
              </li>
              <li className="flex items-center justify-between">
                <span>{drawerDict("language")}</span>
                <LanguageDropdown />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar visible when screen width is less than 1000px */}
      <div
        className={`pt-4 pl-4 pb-1 fixed top-0 left-0 z-49 transition-all duration-300 ease-in-out max-1000:bg-background max-1000:w-full ${
          isOpen ? 'translate-x-64' : 'translate-x-0'
        }`}
      >
        {/* Button to open/close the drawer */}
        <button onClick={toggleDrawer}>
          <MenuSvg />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-50 translate-x-64 visible' : 'opacity-0 translate-x-0 invisible'
        }`}
      />
    </div>
  );
};

export default Drawer;
