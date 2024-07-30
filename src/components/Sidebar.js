import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from './Card';
import CustomImage from './CustomImage';
import TopIcons from './TopIcons';
import ProfileButton from './ProfileButton';
import TutorialOverlay from './TutorialOverlay'; // Import the TutorialOverlay
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true); // State to control tutorial visibility
  const location = useLocation();

  const handleToggle = () => {
    setCollapsed(!collapsed);
    console.log('Sidebar collapsed:', !collapsed);
  };

  const collapsedStyles = {
    width: '160px',
    padding: '10px',
    alignItems: 'center',
  };

  const handleDismissTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <Card style={collapsed ? collapsedStyles : {}}>
      <div className="top-left-icon" onClick={handleToggle}>
        <TopIcons collapsed={collapsed} />
      </div>
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }} className="profile-button">
          <CustomImage />
          {!collapsed && <span style={{ marginLeft: '10px', color: '#ffffff' }}>Sam's GPT</span>}
        </div>
      </div>
      <Link to="/profile">
        <ProfileButton
          text="Profile"
          active={location.pathname === '/profile'}
          collapsed={collapsed}
          className="profile-button"
        />
      </Link>
      <div style={{ marginTop: '20px', color: '#b4b4b4' }} className="previous-conversations">
        {!collapsed && <span>Previous Conversations</span>}
      </div>
      {!collapsed && (
        <div style={{ backgroundColor: '#ffffff', height: '2px', width: '100%', margin: '10px 0' }}></div>
      )}
      <Link to="/education">
        <ProfileButton
          text="Education"
          active={location.pathname === '/education'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/skills">
        <ProfileButton
          text="Skills"
          active={location.pathname === '/skills'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/work-experience">
        <ProfileButton
          text="Work Experience"
          active={location.pathname === '/work-experience'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/entrepreneurship">
        <ProfileButton
          text="Entrepreneurship"
          active={location.pathname === '/entrepreneurship'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/extra-curriculars">
        <ProfileButton
          text="Extra Curriculars"
          active={location.pathname === '/extra-curriculars'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/projects">
        <ProfileButton
          text="Projects"
          active={location.pathname === '/projects'}
          collapsed={collapsed}
        />
      </Link>
      <Link to="/links">
        <ProfileButton
          text="Links"
          active={location.pathname === '/links'}
          collapsed={collapsed}
        />
      </Link>
      {showTutorial && <TutorialOverlay onDismiss={handleDismissTutorial} />}
    </Card>
  );
};

export default Sidebar;
