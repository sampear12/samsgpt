import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import Card from './Card';
import CustomImage from './CustomImage';
import TopIcons from './TopIcons';
import ProfileButton from './ProfileButton';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Added

  const handleToggle = () => {
    setCollapsed(!collapsed);
    console.log('Sidebar collapsed:', !collapsed); // Debugging log
  };

  const collapsedStyles = {
    width: '160px', // Collapsed width
    padding: '10px', // Collapsed padding
    alignItems: 'centre',
  };

  return (
    <Card style={collapsed ? collapsedStyles : {}}>
      <TopIcons onToggleCollapse={handleToggle} collapsed={collapsed} />
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomImage />
          {!collapsed && <span style={{ marginLeft: '10px', color: '#ffffff' }}>Sam's GPT</span>}
        </div>
      </div>
      <Link to="/profile">
        <ProfileButton
          text="Profile"
          active={location.pathname === '/profile'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <div style={{ marginTop: '20px', color: '#b4b4b4' }}>
        {!collapsed && <span>Previous Conversations</span>}
      </div>
      {!collapsed && (
        <div style={{ backgroundColor: '#ffffff', height: '2px', width: '100%', margin: '10px 0' }}></div>
      )}
      <Link to="/education">
        <ProfileButton
          text="Education"
          active={location.pathname === '/education'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/skills">
        <ProfileButton
          text="Skills"
          active={location.pathname === '/skills'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/work-experience">
        <ProfileButton
          text="Work Experience"
          active={location.pathname === '/work-experience'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/entrepreneurship">
        <ProfileButton
          text="Entrepreneurship"
          active={location.pathname === '/entrepreneurship'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/extra-curriculars">
        <ProfileButton
          text="Extra Curriculars"
          active={location.pathname === '/extra-curriculars'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/projects">
        <ProfileButton
          text="Projects"
          active={location.pathname === '/projects'} // Updated
          collapsed={collapsed}
        />
      </Link>
      <Link to="/links">
        <ProfileButton
          text="Links"
          active={location.pathname === '/links'} // Updated
          collapsed={collapsed}
        />
      </Link>
    </Card>
  );
};

export default Sidebar;
