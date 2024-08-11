// Importing necessary React hooks and components
import React, { useState, useCallback } from 'react';

import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';


const Entre = () => {
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const [showOptions, setShowOptions] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(''); // Add this line


    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true); // Show options after initial message
    }, []);

    const initialMessage = useTypewriter(
        "   You made it to my favorite part!! I have been an entrepreneur at heart since a very young age. ",
        handleTypewriterComplete
    );

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const options = [
        "Tell me more about Akimas",
        "Tell me more about Solstis",
        "What is your purpose behind this?",
    ];

    const responses = {
        "Tell me more about Akimas": "     ",
        "Tell me more about Solstis": "    ",
        "What is your purpose behind this?": "   ",
    };

    const handleButtonClick = (option) => {
        const answer = responses[option];
        setActiveQuestion(option); // Add this line
        setChatHistory(prevHistory => [...prevHistory, { question: option, answer }]);
        setShowOptions(false); // Hide options during answering
        setIsAnswering(true); // Set answering state
        setTimeout(() => { // Simulate delay for answering
            setIsAnswering(false);
            setShowOptions(true); // Show options after answering
        }, 1000);
    };
    
    return (
        <div className="scroll-container">
            <div className="main-content">
                <div className="chat-header">
                    <span>Sam's GPT</span>
                </div>
                <div className="chat-messages">
                    <div className="message">
                        <CustomImage />
                        <div className="message-content">
                            <p>{initialMessage}</p>
                        </div>
                    </div>
                    {chatHistory.map((chat, index) => (
        <div key={index} className="chat-entry">
            <div className="question-container">
                <div style={styles.Button} className="question-style">{chat.question}</div>
                <img src="https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png" alt="icon" className="side-icon" />
            </div>
            <QuestionAnswer question={chat.question} answer={chat.answer} />
        </div>
    ))}


            </div>
            
            <div className="options-with-image">
                    {showOptions && (
                        <div className="options-container">
                            {options.map((option, index) => (
                                <div key={index} className="option-item">
                                    <Button
                                        label={option}
                                        onClick={() => handleButtonClick(option)}
                                        isSelected={false}
                                    />
                                    {index === options.length - 1 && (
                                        <img src="https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png" alt="icon" className="option-icon" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
// Styles for the Button component
const styles = {
    Button: {
        cursor: 'pointer',
        width: '288px',
        height: '44px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '22px',
        backgroundColor: '#2f2f2f',
        color: '#ececec',
        fontSize: '13px',
        fontFamily: 'Roboto',
        lineHeight: '18px',
        outline: 'none',
        margin: '5px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SelectedButton: {
        backgroundColor: '#444',
    },
};

// Button component
const Button = (props) => {
    return (
        <button
            style={{ ...styles.Button, ...(props.isSelected ? styles.SelectedButton : {}) }}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Entre;
