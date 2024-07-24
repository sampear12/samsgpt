import React from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import './MainContent.css';

const MainContent = () => {
    const message1 = useTypewriter("Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her. To begin, select what you want to know and click on generate!");


    return (
        <div className="main-content">
            <div className="chat-header">
                <span>Sam's GPT</span>
            </div>
            <div className="chat-messages">
                <div className="message">
                    <CustomImage />
                    <div className="message-content">
                        <p>{message1}</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default MainContent;
