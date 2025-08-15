import React, { useState, useEffect } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const items = ['about', 'resume', 'certifications', 'contact'];
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map(item => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activePage === item ? 'active' : ''}`}
              data-nav-link
              onClick={() => setActivePage(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
        <li className="navbar-item">
          <button
            className="theme-toggle"
            onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? '☀️' : '🌙 '}
          </button>
        </li>
      </ul>
    </nav>
  );
}
