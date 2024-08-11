import React, { useState, useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';
import QuestionAnswer from './QuestionAnswer';
import './MainContent.css';

const Skills = () => {
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const [showOptions, setShowOptions] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState('');

    const handleTypewriterComplete = useCallback(() => {
        setShowOptions(true); // Show options after initial message
    }, []);

    const initialMessage = useTypewriter(
        `    <strong>Programming Languages:</strong> 
Java, Python, HTML/CSS, JavaScript, C#, C

 <strong>Cloud:</strong> 
AWS: IAM, EC2, EKS, Lambda functions, S3, CloudShell, Assume Role Management
Docker, Kubernetes, Microservices, Serverless Architecture, Terraform

<strong>FrontEnd: </strong> 
React, Angular, Android, Vercel, Bootstrap, Sphinx, Test automation, Functional and Regression testing, Penetration testing

<strong>Backend:</strong> 
Flask, S3, DynamoDB, MongoDB

<strong>Tools: </strong> 
Git, Atlassian Toolset (JIRA, Bitbucket, Confluence), IAPs (Identity-Aware Proxies), Appium and Selenium, ROS (Robot Operating System), Agile Software Development Process, SketchUp, API documentation, Mars, Figma, SourceTree

<strong>IDE Software:</strong> 
 Microsoft Visual Studio, Eclipse, Logisim, Arduino, IntelliJ

 Select an option below to know more about individual skillsets!
`,
        handleTypewriterComplete
    );

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const options = [
        "Programming Languages",
        "Cloud",
        "FrontEnd/Backend Experience",
        "Tools",
    ];

    const responses = {
        "Programming Languages": `   I've been coding for the past 5 years and have learnt a myriad of languages since. My years of experience in each: 
        
        Java: 5+ years

        Python: 3+ years
        
        HTML/CSS/JavaScript: 2+ years

        C#: 1 year

        C: 1 year`,
        "Cloud": `    I have been working within the cloud for the past year with 3 months of concentrated experience working at Saviynt as a Cloud DevOps Intern.
        
        •  managed roll creation, access management and assumRole functionality on IAM

        •  programatically created, stored and accessed datasets in S3 buckets

        • created Lambda functions to execute hands-free automation

        •  created cloud cluster environment for customer access using EC2, EKS and Kubernetes

        • automated virtual session host creaton using EC2 `,
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
         •  execution of various git commands including commits, rebase, cherrypick, resolving merge conflicts etc.
         •  programatically changed repo settings, creates git pipelines etc by generating and utilizing access tokens 
         •  studied the git API documentation extensively 

         Atlassian Toolset: 
         •  Utilized Jira to create, assign and arrange tasks
         •  Utilized BitBucket for creating test cases at Honeywell
         •  Utilized Confluence to create thorough code documentation and share my work with the team

         Agile:
         •  Effectively participated in the Agile Development process with daily standups, sprint meetings etc

         API documentation:
         •  Thoroughly documented API code bases for over 100 test files at Honeywell
         •  Documented each method with the definition, input datatype and return type of each function.
         • Proceeded to test and debug error prone methods
        
         Test Automation + Functional/Regression Testing: 
         •  Created test scripts at Honeywell for a voice enabled android application
         •  Performed Functional and Regressional Testing to ensure error proof transition to the latest deployment version`
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

export default Skills;
