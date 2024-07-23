import React from 'react';
import Card from './Card';
import NavigateButton from './NavigateButton';
import ProfileButton from './ProfileButton';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Card>
      <NavigateButton />
      <ProfileButton text="Profile" />
      {/* Add more buttons here as needed */}
    </Card>
  );
};

export default Sidebar;
