import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Work Experience</li>
                    <li>Entrepreneurship</li>
                    <li>Extra Curriculars</li>
                    <li>Projects</li>
                    <li>Links</li>
                </ul>
            </nav>
            <div className="add-workspace">
                <button>Add Team workspace</button>
            </div>
        </div>
    );
};

export default Sidebar;
