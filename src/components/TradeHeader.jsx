import React, { useState } from 'react';
import './TradeHeader.css';
import { TrendingUp, Menu, X } from 'react-feather';

const TradebookHeader = ({ activeTab, setActiveTab, collapsed }) => {
  const [selectedBook, setSelectedBook] = useState('Demo Tradebook');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tradebooks = ['Demo Tradebook', 'My Tradebook', 'Test Book'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="header-wrapper">
      {/* Logo - only shown when collapsed */}
      {collapsed && (
        <div className="logo">
          <span className="logo-text-indigo">CHART</span>
          <TrendingUp size={28} className="logo-icon" />
          <span className="logo-text-green">MAZE</span>
        </div>
      )}

      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Header content */}
      <div className={`header-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Tab Switcher */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === 'Trades' ? 'active' : ''}`}
            onClick={() => setActiveTab('Trades')}
          >
            Trades
          </button>
          <button
            className={`tab-btn ${activeTab === 'Summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('Summary')}
          >
            Summary
          </button>
        </div>

        {/* Dropdown Section */}
        <div className="load-section">
          <span className="load-label">Load:</span>
          <div className="dropdown-wrapper">
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
              className="dropdown"
            >
              {tradebooks.map((book) => (
                <option key={book} value={book}>
                  {book}
                </option>
              ))}
            </select>
            <span className="edit-icon">✎</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradebookHeader;