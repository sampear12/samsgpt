import React, { useState, useEffect } from 'react';
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

  // Function to determine responsive font size
  const getResponsiveFontSize = () => {
    if (window.innerWidth <= 600) {
      return '14px'; // Font size for mobile devices
    } else if (window.innerWidth <= 1024) {
      return '14px'; // Font size for tablets
    } else {
      return '16px'; // Font size for desktops and larger screens
      
    }
  };

  const collapsedStyles = {
    width: '70px',
    padding: '10px',
    alignItems: 'center',
    fontSize: getResponsiveFontSize(), // Adjust font size for collapsed sidebar
  };

  useEffect(() => {
    // Handle window resize event to update font size
    const handleResize = () => {
      document.querySelectorAll('.profile-button span').forEach((element) => {
        element.style.fontSize = getResponsiveFontSize();
      });
    };

    window.addEventListener('resize', handleResize);

    // Initial font size setting
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    setCollapsed(!collapsed);
    console.log('Sidebar collapsed:', !collapsed);
  };

  const handleDismissTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <Card style={collapsed ? collapsedStyles : {}}>
        <div className="top-left-icon" onClick={handleToggle}>
            <TopIcons collapsed={collapsed} />
        </div>
        <div style={{ marginTop: '20px', marginBottom: '40px', marginLeft: `5px` }}>
            <div style={{ display: 'flex', alignItems: 'center' }} className="profile-button">
                <CustomImage />
                {!collapsed && (
                    <span 
                        style={{ 
                            color: '#ffffff', 
                            fontSize: getResponsiveFontSize(), 
                            marginLeft: '10px'  // Add margin here to create space
                        }}
                    >
                        Samika
                    </span>
                )}
            </div>
        </div>

      
    
      <Link to="/intro">
      <Link to="/">
        <ProfileButton
          text="Intro"
          active={location.pathname === '/' || location.pathname === '/intro'} // Active for both paths
          collapsed={false} // or your state-controlled collapsed variable
        />
      </Link>
  
</Link>


      <div style={{ marginTop: '25px', marginLeft: `10px`,color: '#b4b4b4' }} className="previous-conversations">
        {!collapsed && <span style={{ fontSize: getResponsiveFontSize() }}>Conversations</span>}
      </div>
      {!collapsed && (
        <div style={{ backgroundColor: '#ffffff', height: '2px', width: '100%', margin: '10px 0' }}></div>
      )}
      <Link to="/profile">
        <ProfileButton
          text="Profile"
          active={location.pathname === '/profile'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>

      <Link to="/work-experience">
        <ProfileButton
          text="Work Experience"
          active={location.pathname === '/work-experience'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      <Link to="/skills">
        <ProfileButton
          text="Skills"
          active={location.pathname === '/skills'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      <Link to="/entrepreneurship">
        <ProfileButton
          text="Entrepreneurship"
          active={location.pathname === '/entrepreneurship'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      <Link to="/education">
        <ProfileButton
          text="Education"
          active={location.pathname === '/education'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      <Link to="/extra-curriculars">
        <ProfileButton
          text="Extra Curriculars"
          active={location.pathname === '/extra-curriculars'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      <Link to="/links">
        <ProfileButton
          text="Links"
          active={location.pathname === '/links'}
          collapsed={collapsed}
          style={{ fontSize: getResponsiveFontSize() }} // Adjust font size dynamically
        />
      </Link>
      {showTutorial && <TutorialOverlay onDismiss={handleDismissTutorial} />}
    </Card>
  );
};

export default Sidebar;
