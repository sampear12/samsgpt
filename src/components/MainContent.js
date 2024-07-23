import React from 'react';
import CustomImage from './CustomImage';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="chat-header">
                <span>Sam's GPT</span>
            </div>
            <div className="chat-messages">
                <div className="message">
                    <CustomImage className="custom-image" />
                    <div className="message-content message-content-first">
                        <p>Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her.</p>
                    </div>
                </div>
                <div className="message">
                    <CustomImage className="custom-image" />
                    <div className="message-content">
                        <p>To begin, click on generate!</p>
                    </div>
                </div>
            </div>
            <div className="input-area">
                <PrimaryButton label="Who is Samika ?" />
                <SecondaryButton label="Generate" />
            </div>
        </div>
    );
};

export default MainContent;
