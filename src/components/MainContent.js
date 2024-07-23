import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="top-bar">
                <input type="text" placeholder="Who is Samika ?" />
                <button>Generate</button>
            </div>
            <div className="content">
                <p>Sam's GPT can make mistakes, especially in the mornings when she hasn’t had her coffee.</p>
            </div>
        </div>
    );
};

export default MainContent;
