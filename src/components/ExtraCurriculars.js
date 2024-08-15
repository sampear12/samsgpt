import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';

const ExtraCurricular = () => {
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const [showOptions, setShowOptions] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState('');

    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true); // Show options after initial message
    }, []);

    const initialMessage = useTypewriter(
        `   I've been a part of a myriad of clubs and attempted to follow many of my non-coding passions (like being a singer haha). Some of the clubs I'm involved in:
        
<strong>Vice-President, Women in Computer Science (WICS), Pittsburgh, PA    2023-2024 </strong>

<strong> President, Lothrop Hall Council, Pittsburgh, PA    2022-2023 </strong>

<strong>Club Member, Pitt FSAE Panther Racing, Pittsburgh, PA   2022-present </strong>

<strong> Hackathon, SheInnovates, Pittsburgh, PA     2023 </strong>

I'm also extremely passionate about women empowerment in technology. I attend events like the Grace Hopper Conference and WECode to advocate for this!

Apart from this, in my free time I write songs, play the piano, play soccer, spikeball, volleyball and am currently trying to learn MMA! I'm also hoping to continue my passion for surfing after graduating :))
`,
        handleTypewriterComplete
    );

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const [currentResponse, setCurrentResponse] = useState('');
    
    const handleButtonClick = (option) => {
        const answer = responses[option];
        setActiveQuestion(option);
        setChatHistory(prevHistory => [...prevHistory, { question: option, answer }]);
        setRemainingOptions(prevOptions => prevOptions.filter(opt => opt !== option)); // Filter out the clicked option
        setShowOptions(false); // Hide options during answering
        setIsAnswering(true); // Set answering state
        setCurrentResponse(answer);
              // Simulate a delay to allow the answer to "type out" before showing options again
              setTimeout(() => {
                setIsAnswering(false); // Answering done
                handleTypewriterComplete(); // Show options again
            }, answer.length * 5); // Adjust the timing based on answer length (simulated typing time)
        
    };

    const [remainingOptions, setRemainingOptions] = useState([
        "WICS",
        "Lothrop Hall Council",
        "FSAE Panther Racing",
        "SheInnovates"
        
    ]);

    const responses = {
        "WICS": `  <strong>Vice-President, Women in Computer Science (WICS), Pittsburgh, PA    2023-2024 </strong>

• Introduced fortune 100 sponsors and technical workshops for underrepresented student communities.`,
        "Lothrop Hall": `<strong> President, Lothrop Hall Council, Pittsburgh, PA    2022-2023 </strong>
        
        • Lead a council of students and resident assistants to organize bi-weekly events for over 600 student residents.`,
        "FSAE Panther Racing": `   <strong>Club Member, Pitt FSAE Panther Racing, Pittsburgh, PA   2022-present </strong>
• Converted sensory signals to assembly language using ROS and Arduino to program a life-size intended F1 car.
• Completed coursework on ROS, Linux, and Optimization Theory to get the vehicle ready for competition.`,
        "SheInnovates": `Developed an application for OCD therapy with integrated sensors using HTML, Python, and Figma! `,
        
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
                    {remainingOptions.map((option, index) => (
                        <div key={index} className="option-item">
                            <Button
                                label={option}
                                onClick={() => handleButtonClick(option)}
                                isSelected={false}
                            />
                            {index === remainingOptions.length - 1 && (
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

export default ExtraCurricular;