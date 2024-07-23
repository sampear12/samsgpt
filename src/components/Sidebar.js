import React from 'react';
import Card from './Card';
import NavItem from './NavItem';
import NavigateButton from './NavigateButton';
import ProfileButton from './ProfileButton';

const Sidebar = () => {
  return (
    <Card>
      <div style={{ marginBottom: '20px' }}>
        <NavItem icon="path/to/sams-gpt-icon.png" text="Sam's GPT" />
        <NavItem icon="path/to/resume-icon.png" text="Resume" />
      </div>
      <NavigateButton />
      <div style={{ backgroundColor: '#ffffff', height: '2px', width: '100%', margin: '10px 0' }}></div>
      <ProfileButton text="Profile" />
      <ProfileButton text="Education" />
      <ProfileButton text="Skills" />
      <ProfileButton text="Work Experience" />
      <ProfileButton text="Entrepreneurship" />
      <ProfileButton text="Extra Curriculars" />
      <ProfileButton text="Projects" />
      <ProfileButton text="Links" />
    </Card>
  );
};

export default Sidebar;
