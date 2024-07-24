import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import './MainContent.css';

const MainContent = () => {
    const [response, setResponse] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [optionsVisible, setOptionsVisible] = useState(true);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Added state variable

    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true);
    }, []);

    const initialMessage = useTypewriter(
        "   Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her. To begin, select an option from the following to know more about her profile!",
        handleTypewriterComplete
    );
    const handleButtonClick = (index, message) => { // Added index parameter
        setSelectedOptionIndex(index); // Set the selected option index
        
    };
    
    

    const options = [
        { label: "Give me a quick introduction to Samika", message: "Samika is a software engineer with over 5 years of experience..." },
        { label: "What's it like to work with Samika?", message: "Working with Samika is an enriching experience because she..." },
        { label: "What is she like outside work?", message: "Outside of work, Samika enjoys hiking, reading books, and..." },
        { label: "I'm bored and I want to play a game", message: "Sure! Let's play a quick trivia game. Here's your first question..." },
    ];

    return (
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
                {response && (
                    <div className="message">
                        <CustomImage />
                        <div className="message-content">
                            <p>{response}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="options-with-image"> {/* New div to wrap options and image */}
                {showOptions && (
                    <>
                        <div className="options-container">
                            {options.map((option, index) => (
                                <React.Fragment key={index}>
                                    <Button
                                        label={option.label}
                                        onClick={() => handleButtonClick(index, option.message)} // Pass index and message
                                    />
                                    {selectedOptionIndex === index && (
                                        <div className="response-message">
                                            <CustomImage />
                                            <div className="message-content">
                                                <p>{response}</p>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <img src="https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png" alt="icon" className="side-icon" /> {/* New img element */}
                    </>
                )}
            </div>
        </div>
    );
};
                        

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
        justifyContent: 'center', // Center text horizontally
    },
};

const Button = (props) => {
    return (
        <button style={styles.Button} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default MainContent;
