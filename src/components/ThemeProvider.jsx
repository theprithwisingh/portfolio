import React, { useState, useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply the theme to the body element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button
        className="h-5 w-10 ml-5 mt-40 text-white text-[12px] bg-black rounded-sm focus:outline-none"
        onClick={toggleTheme}
      >
        
      {theme === 'light' ? 'Dark' : 'Light'}{/*togglebutton*/}
      </button>
      <div className={theme}>
        {/* This renders the children components and passes down the theme */}
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
