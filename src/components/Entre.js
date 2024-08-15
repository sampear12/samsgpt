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
        `  Congrats, you made it to my favorite part!! As a kid, it was practically impossible to seperate me from my copy of the <a href=" https://www.goodreads.com/book/show/11084145-steve-jobs" target="_blank" style="text-decoration: underline; color: inherit;">autobiography of Steve Jobs</a>. Not because I was obsessed with him, but because i was obsessed with the Idea of changing the world. To be fair, 10 year old Sam didn't understand how big the world <em>really</em> was. 
        
        <strong>AkimasBakingCo</strong>
        At the time, Ubereats and other food delivery software were out of business in my hometown, Pune (India). I saw this opening in the market as a chance to deploy a simple yet effectively cloud kitchen in the city.
        I developed a script that would:
        1) intake food orders through a google form on the company's instagram (including customer address and contact info)
        2) automatically contact a local delivery service and connect me with a driver nearby who could drop off the prepared food in under 30 mins
        3) send the intake order to an online interface in the kitchen where my team would prepare the food 
        4) within 30-60 mins the food would be at the users door. Contactless, efficient and profitable. 

        Click the option below if you're curious to know how that ended :)
        
        <strong> Solstis </strong>
        I started my second "company", Solstis, in college. My co-founders (shoutout to Pratik and Shorya) and I built a POC for an AI and Cloud driven platform that would:
        1) guide early stage entrepreneurs through the process of converting their ideas from a POC to a business model
        2) connect entrepreneurs in the area with each other as well as investors, advisors etc.
        3) in simple words, a LinkedIn for entrepreneurs 

        We recieved funding from Microsofts Founder's Hub, incubated into Carnegie Mellon's Schwartz Center of Entrepreneurship and the Pitt Big Ideas Center. Through their support, our bootstrap cost was nearly $0 (thank god)

        Click the Solstis option to know what happened!

        <strong> Mystery Project </strong>
        My most recent project that I'm hoping to turn into the next million $ idea (jk, kinda) is a software that automates the ticket assigning process in management tools like Jira using AI. 
        Our goal is to use AI to make teams within any-size companies more efficient by:
        1) reducing ticket backlog by analyzing sprint requirements 
        2) assign tasks based on individual expertise and workload (configurable data files that can prioritize work hours/expertise/new projects)
        3) using ML to learn a teams work dynamic and understand the best assigning process for highest productivity rates

        The project is intended to be a pivot for Solstis and is pretty early stage right now but we're excited to see where it goes!
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
    

    const [remainingOptions, setRemainingOptions] = useState([ // State to keep track of remaining options
        "AkimasBakingCo",
        "Solstis",
        "Mystery Project",
    ]);
    

    const responses = {
        "AkimasBakingCo": `   We stopped operations in 2022, a year after I moved to the United States. We had an annualized ROI of 175%, making around Rs. 2,00,000 in the first 6 months of operation. 
        We donated the majority of it to various causes:
        1) Funding the treatment of underpriviledged breast cancer patients through the <a href="https://prashanticancercare.org/" target="_blank" style="text-decoration: underline; color: inherit;">Prashanti Cancer Care Mission</a> 
        2) Covid-19 relief in India through <a href="https://www.khalsaaid.org/" target="_blank" style="text-decoration: underline; color: inherit;">Khalsa Aid</a>
        3) Wild animal rescue and rehabilitation through <a href="https://www.resqct.org/" target="_blank" style="text-decoration: underline; color: inherit;">Rescue CT</a> 
        
        P.S: Please consider donating to any of the organizations if you can :)`,
        "Solstis": `    After our initial POC, as most entrepreneurial ventures go, we realized that our product-market fit was not good enough for us to enter the market with a profitable margin. 
        Learning to make, market and network with people in the entrepreneurial world will always be one of my favorite learning experiences. Hence, after about 8 months of working on the idea and a million pivots later, we decided to focus more on our upcoming project!`,
        "Mystery Project": `   it wouldn't really be a mystery if i told you more about it now, would it?    `  
        
        
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

export default MainContent;
