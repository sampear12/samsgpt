import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';

const WorkExperience = () => {
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const [showOptions, setShowOptions] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState('');

    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true); // Show options after initial message
    }, []);

    const initialMessage = useTypewriter(
        `    <strong>Test Engineering Intern, Honeywell, Pittsburgh, PA May-August 2023</strong>

• Found and pushed fixes for two major bugs before version release for embedded Android voice enabled application.
• Designed and implemented a website for test automation tools using CSS, HTML, Python, and Flask.
• Created test scripts and enhanced API documentation for proprietary test automation framework in Python using Sphinx.
• Participated in the Agile/Scrum Software Development process - Sprint Planning, Standup, etc.

<strong>Undergraduate Teaching Assistant, University of Pittsburgh, Pittsburgh, PA 2023-2024 </strong>
• Conducted weekly recitations, created quizzes/mock exams, graded assignments, and hosted office hours for students in CS0445 Algorithms and Data Structures & CS0401 Intermediate Programming in Java.

<strong>Website Development Intern, YouthPlaces, Pittsburgh, PA January-May 2023</strong>
• Modified the organization’s website to monitor website traffic and digital risk rates using HTML and JS.
• Added features to reflect real time events, programs and donations using Bootstrap, Flask, Sphinx and WordPress.
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
        "Cloud Devops Intern @ Saviynt",
        "Test Engineering Intern @ Honeywell",
        "Web Dev Intern @ YouthPlaces",
    ]);

    const responses = {
        "Cloud Devops Intern @ Saviynt": `   `,
        "Experience in Cloud": `    I have been working within the cloud for the past year with 3 months of concentrated experience working at Saviynt as a Cloud DevOps Intern.
        
        - managed roll creation, access management and assumRole functionality on IAM

        - programatically created, stored and accessed datasets in S3 buckets

        - created Lambda functions to execute hands-free automation

        - created cloud cluster environment for customer access using EC2, EKS and Kubernetes

        - automated virtual session host creaton using EC2 `,
        "FrontEnd/Backend Experience": `   Through my personal ventures, internship experiences and my role as founder in SAAS startups, I (tried to) learn the art of being a full stack developer! My projects with associated skills:
        
        <strong>FrontEnd:</strong>

        Personal Website + other projects: React, HTML, CSS, JavaScript, AI/ML, Git

        Test Engineering Intern at Honeywell: HTML/CSS, React

        SAAS prototype: React, Flask, Vercel

        Website Developer at YouthPlaces: WordPress, HTML/CSS
        

        <strong>BackEnd:</strong>

        SAAS Prototype: Node.js, MongoDB, SignalR .NET, Firebase, express, MSSQL

        Cloud DevOps at Saviynt: S3 bucket automation for data storage`,

         "Tools": `   I learnt to use various different technical tools throughout my experiences:
         
         Git: 
         - can execute various git commands including commit, rebase, cherrypick, resolve merge conflicts
         - programatically change settings by generating and utilizing access tokens 
         - studied the git API documentation

         Atlassian Toolset: 
         - Utilized Jira to create, assign and arrange tasks
         - Utilized BitBucket for creating test cases at Honeywell
         - Utilized Confluence to create thorough code documentation and share files with my teams

         Agile:
         - Effectively participated in the Agile Development process with daily standups, sprint meetings etc

         API documentation:
         - Thoroughly documented API code base for over 100 test files at Honeywell
         - Documented each method with the definition, input datatype and return type of each function.
        
         Test Automation + Functional/Regression Testing: 
         - Created test scripts at Honeywell for a voice enabled android application
         - Performed Functional and Regressional Testing to ensure error proof transition to the latest deployment version`
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

export default WorkExperience;
