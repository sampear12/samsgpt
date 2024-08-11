import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';

const MainContent = () => {
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const [showOptions, setShowOptions] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState('');

    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true); // Show options after initial message
    }, []);

    const initialMessage = useTypewriter(
        `   Hi! Thanks for stopping by :) I'm Samika, a senior at Pitt studying Computer Science. I built Sam's GPT to be an AI version of me to reflect my recent interest in AI/ML! A quick introduction:

•  I graduate in 2025 with a degree in Computer Science at the University of Pittsburgh (Dean's List '24 and '23). I am also an international student from India in the USA on an F1 visa :)

•  2x Founder with a deep rooted passion for making a tangible positive impact using technology

•  I'm currently looking for full time roles in software/cloud engineering for 2025. 

•  Core skills: Java, Python, HTML/CSS, AWS (Lambda, EC2, EKS, S3), Git, Node.js, React, Docker, Kubernetes, etc. 

•  Previously worked as a Cloud DevOps Engineering Intern @ Saviynt, Test Engineering Intern @ Honeywell and currently serve as CEO of a SAAS company

•  Part time chef for my entire friend group and oh i love cars `,
        handleTypewriterComplete
    );

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const options = [
        "What's it like to work with Samika?",
        "What are her hobbies?",
        "What is she like outside work?",
        "I'm bored and I want to play a game"
    ];

    const responses = {
        "What's it like to work with Samika?": `"  <strong>#1 When I believe in an idea, I pursue it wholeheartedly.</strong>

        •  At Saviynt, I pitched an idea I had to create in-house automations that would save 48min-1.2h/day for over 600 employees.
        •  The CEO approved of the POC, single coolest moment of my corporate life.


        <strong>#2 Apart from my sense of humor, I also have a passion for making things more efficient.</strong>

        •  At Honeywell, I helped create the internal testing website which improved efficiency within the testing team by 30% in the first month. 
        •  I also replaced the background with the Elmo on fire meme, thereby making history in Pittsburgh's Honeywell office as the "Elmo intern". What's productivity without a lil humor?
        

        <strong>#3 Great things are never done by one person..</strong>

        •  Having led a team of 8 people at my startup, I learnt the fundamentals of leadership.
        •  No matter how good one may be, we are nothing without our team.`,
        "What are her hobbies?": `"   Apart from coding the most random ideas at 3am I also enjoy:

•  cooking (especially Thai food)

•  painting, bowling, top golf 

•  volunteering at the animal shelter (let me know if you'd be interested as well!)

•  examining car engines (especially v8 sport cars)

•  rooting for Ferrari in Formula 1 races

•  always trying to find problems that I could turn into the next million $ idea!`,
        "What is she like outside work?": `   <strong>"The key to success is happiness"</strong>

I make sure to take time to do things that keep me mentally calm and refreshed. This includes giving enough time to develop the ideas that I am passionate about, spending time with friends and family, taking a break to pet a cute dog, and doing spontaneous things with my friends!`,
        "I'm bored and I want to play a game": "   Sure! Here's a few games I love playing:"
    };

    const handleButtonClick = (option) => {
        const answer = responses[option];
        setActiveQuestion(option);
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
                            <p dangerouslySetInnerHTML={{ __html: initialMessage.replace(/\n/g, '<br />') }}></p>
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

export default MainContent;
