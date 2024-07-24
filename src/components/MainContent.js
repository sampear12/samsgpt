import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';

const MainContent = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isAnswering, setIsAnswering] = useState(false); // <-- Added isAnswering state


    const handleTypewriterComplete = useCallback(() => {
        if (!isAnswering) {
            setShowOptions(true);
        } else {
            setIsAnswering(false);
            setShowOptions(true); // Reset options display
        }
    }, [isAnswering]);
    
    const initialMessage = useTypewriter(
        "   Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her. To begin, select an option from the following to know more about her profile!",
        handleTypewriterComplete
    );

    const handleButtonClick = (index) => {
        const selectedOption = options[index];
        setSelectedOptionIndex(index);
        setQuestion(selectedOption.label);
        setAnswer(getAnswerForQuestion(selectedOption.label));
        
    };

    const getAnswerForQuestion = (question) => {
        switch(question) {
            case "Give me a quick introduction to Samika":
                return "   Samika is a software engineer with 5 years of experience in full-stack development...";
            case "What's it like to work with Samika?":
                return "Working with Samika is a collaborative and enriching experience. She is known for her problem-solving skills...";
            case "What is she like outside work?":
                return "Outside of work, Samika enjoys hiking, painting, and volunteering at local animal shelters...";
            case "I'm bored and I want to play a game":
                return "Let's play a fun word game! Think of a word, and I'll try to guess it...";
            default:
                return "";
        }
    };

    const options = [
        { label: "Give me a quick introduction to Samika" },
        { label: "What's it like to work with Samika?" },
        { label: "What is she like outside work?" },
        { label: "I'm bored and I want to play a game" },
    ];

    const handleAnswerComplete = () => {
        setSelectedOptionIndex(null); // Reset selectedOptionIndex
        setShowOptions(true); // Show options again
    };
    
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
            </div>
            <div className="options-with-image">
                {showOptions && (
                    <div className="options-container">
                        {options.map((option, index) => (
                            selectedOptionIndex === null || selectedOptionIndex === index ? (
                                <Button
                                    key={index}
                                    label={option.label}
                                    onClick={() => handleButtonClick(index)}
                                    isSelected={selectedOptionIndex === index}
                                />
                            ) : null
                        ))}
                        <img src="https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png" alt="icon" className="side-icon" />
                    </div>
                )}
            </div>
            {selectedOptionIndex !== null && (
                <div className="chat-messages">
                    <QuestionAnswer question={question} answer={answer} />
                </div>
            )}
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
        justifyContent: 'center',
    },
    SelectedButton: {
        backgroundColor: '#444',
    },
};

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

export default MainContent;
