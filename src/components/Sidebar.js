import React, { useState } from 'react';
import Card from './Card';
import CustomImage from './CustomImage';
import TopIcons from './TopIcons';
import ProfileButton from './ProfileButton';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('Profile');

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Card className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <TopIcons onToggleCollapse={handleToggle} />
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomImage />
          {!collapsed && <span style={{ marginLeft: '10px', color: '#ffffff' }}>Sam's GPT</span>}
        </div>
      </div>
      <ProfileButton text="Profile" active={activeSection === 'Profile'} onClick={() => setActiveSection('Profile')} />
      <div style={{ marginTop: '20px', color: '#b4b4b4' }}>
        {!collapsed && <span>Previous Conversations</span>}
      </div>
      <div style={{ backgroundColor: '#ffffff', height: '2px', width: '100%', margin: '10px 0' }}></div>
      <ProfileButton text="Education" active={activeSection === 'Education'} onClick={() => setActiveSection('Education')} />
      <ProfileButton text="Skills" active={activeSection === 'Skills'} onClick={() => setActiveSection('Skills')} />
      <ProfileButton text="Work Experience" active={activeSection === 'Work Experience'} onClick={() => setActiveSection('Work Experience')} />
      <ProfileButton text="Entrepreneurship" active={activeSection === 'Entrepreneurship'} onClick={() => setActiveSection('Entrepreneurship')} />
      <ProfileButton text="Extra Curriculars" active={activeSection === 'Extra Curriculars'} onClick={() => setActiveSection('Extra Curriculars')} />
      <ProfileButton text="Projects" active={activeSection === 'Projects'} onClick={() => setActiveSection('Projects')} />
      <ProfileButton text="Links" active={activeSection === 'Links'} onClick={() => setActiveSection('Links')} />
    </Card>
  );
};

export default Sidebar;
