import React, { useState } from 'react';
import { 
  LayoutList, 
  Plus, 
  FileText, 
  FolderOpen, 
  Home, 
  MessageSquare, 
  HelpCircle,
  TrendingUp, ChevronRight
} from 'lucide-react';
import './ChartsMazeSidebar.css';

export default function ChartsMazeSidebar({ collapsed, setCollapsed }) {
  const [active, setActive] = useState('Trade Diary');
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { id: 'rulebook', icon: <LayoutList size={20} />, label: 'My Rule Book' },
    { id: 'addTrades', icon: <Plus size={20} />, label: 'Add Trades' },
    { id: 'manageTrades', icon: <FileText size={20} />, label: 'Manage Trades' },
    { id: 'openPositions', icon: <FolderOpen size={20} />, label: 'Open Positions' },
    { id: 'dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { id: 'tradeDiary', icon: <LayoutList size={20} />, label: 'Trade Diary' },
    { id: 'screener', icon: <TrendingUp size={20} className="screener-icon" />, label: 'ChartsMaze Screener' },
    { id: 'helpFeedback', icon: <MessageSquare size={20} />, label: 'Help or Feedback' },
  ];

  return (
    <div className={`sidebar ${collapsed ? '' : 'expanded'}`}>
      {/* Logo as Toggle */}
      <div 
        className="logo-container" 
        onClick={toggleSidebar}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <div className="logo-collapsed">
            <TrendingUp size={28} className="emerald-icon" />
          </div>
        ) : (
          <div className="logo">
            <span className="logo-text-indigo">CHART</span>
            <TrendingUp size={20} className="logo-icon" />
            <span className="logo-text-green">MAZE</span>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="menu-container">
        <nav className="nav-menu">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className={`menu-item ${active === item.label ? 'active' : ''} ${collapsed ? 'collapsed' : ''} ${item.special ? 'special-item' : ''}`}
              onClick={() => setActive(item.label)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              title={collapsed ? item.label : ''}
            >
              <span className={`menu-icon ${item.special ? 'special-icon' : ''} ${hoveredItem === item.id ? 'hovered-icon' : ''} ${active === item.label ? 'active-icon' : ''}`}>
                {item.icon}
              </span>
              {!collapsed && (
                <span className={`menu-text ${hoveredItem === item.id ? 'hovered-text' : ''} ${active === item.label ? 'active-text' : ''}`}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {!collapsed && (
          <div className="help-card">
            <div className="help-icon">
              <HelpCircle size={16} className="special-icon" />
            </div>
            <div className="help-content">
              <h4 className="help-title">Need help?</h4>
              <p className="help-subtitle">Check our documentation</p>
            </div>
          </div>
        )}
        
        <button className={`login-btn ${collapsed ? 'collapsed' : ''}`}>
          {collapsed ? (
            <Plus size={20} />
          ) : (
            <>
              <span>Login</span>
              <ChevronRight size={16} className="login-arrow" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}