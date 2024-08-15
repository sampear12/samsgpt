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
        `   I have had a myriad of technical experiences so far that have shaped my technical and interpersonal skills. Click on the options below to learn more about each individual experience!
        ---------------------------------------------------------------------------------------------------------------------------------------
        <strong>Cloud DevOps Intern, <a href="https://saviynt.com/" target="_blank" style="text-decoration: underline; color: inherit;">Saviynt</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        Los Angeles, CA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         May-August 2023</strong>
        <em>Skills: AWS Lambda, IAM, EC2, S3, DynamoDB, boto3, SES, Git automation, Python, Java, Virtru, SalesForce, Atlassian (Jira, Confluence)</em>
        "You will not be remembered for what you have started, but for what you have successfully completed." — Hamadi Jamali (my awesome manager)

Working at Saviynt was an opportunity to bring creative solutions to life in a supportive environment. I worked on security, encryption and automation on several AWS services including Lambda, IAM, EC2, S3 etc. 
I also had the privilege of presenting and executing a POC to Sachin Nayyar, CEO of Saviynt, which automated 10-20 redundant processes, impacting over 600 employees - probably the coolest moment of my career so far.
---------------------------------------------------------------------------------------------------------------------------------------        
        <strong>Test Engineering Intern, <a href="https://www.honeywell.com/us/en" target="_blank" style="text-decoration: underline; color: inherit;">Honeywell</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pittsburgh, PA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    May-August 2023</strong>
<em>Skills: Python, Java, GitHub, Agile, Android, Bootstrap, Sphinx, Flask, API documentation, Test automation, Functional and Regression testing, Atlassian Toolset (JIRA, Bitbucket, Confluence), Appium and Selenium, SourceTree</em> 

At Honeywell, I had the privilege of working with an exceptional team that exposed me to professional app development—from initial build to final deployment. My role involved API documentation, creating test scripts for automated testing, finding and pushing bug fixes and ofcourse, being the Elmo intern!
From debugging critical issues in voice-enabled Android applications to creating the design of a test automation website, my time at Honeywell was both challenging and rewarding, pushing me to grow technically and personally.
---------------------------------------------------------------------------------------------------------------------------------------
<strong>Undergraduate Teaching Assistant, <a href="https://www.pitt.edu/" target="_blank" style="text-decoration: underline; color: inherit;">University of Pittsburgh</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Pittsburgh, PA    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  2023-2024 </strong>
<em>Skills: Using memes as an effective strategy to explain difficult concepts</em>

I served as an undergraduate Teaching Assistant for CS0445: Data Structures and Algorithms 1 and CMPINF0401: Intermediate Programming in Java. I have always loved teaching, especially core concepts in Computer Science. One of my favorite accomplishments will always be having a class in full attendance at 9am on a Thursday! 
---------------------------------------------------------------------------------------------------------------------------------------
<strong>Website Development Intern,  <a href="https://youthplaces.org/" target="_blank" style="text-decoration: underline; color: inherit;">YouthPlaces</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Pittsburgh, PA   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   January-May 2023</strong>
<em>Skills: HTML, CSS, JS, WordPress</em>

I took part in Pitt's IServe program that aims at helping Computer Science students serve non-profit organizations. I worked on maintaining and enhancing the YouthPlaces website using CSS, HTML, WordPress and JS!
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
        "Undergraduate Teaching Assistant",
        "Web Dev Intern @ YouthPlaces",
    ]);

    const responses = {
        "Cloud Devops Intern @ Saviynt": `  • Security POC: Created and executed a security Proof of Concept (POC) for automated email encryption, protecting cloud cluster environment details using Python, Virtrue, and DynamoDB.

• Automation & Efficiency: Developed a GitLab automation script that integrated 15,000+ customer databases with corresponding Salesforce information. This reduced billing errors by 40%, saved 50-60 hours of manual work, and improved the efficiency of the customer onboarding process.

• Lambda Functions: Executed Lambda functions for hands-free automation, saving 48 minutes to 1.2 hours of employee time per task, including email verification, 2FA, and encryption of passwords sent to customers.

• Data Management: Programmatically created, stored, and accessed datasets in S3 buckets, saving 2 hours per day on manual financial report consolidation with a 40% reduction in errors.`,
        "Test Engineering Intern @ Honeywell": `  • Found and pushed fixes for two major bugs before version release for embedded Android voice enabled application.
• Designed and implemented a website for test automation tools using CSS, HTML, Python, and Flask.
• Created test scripts and enhanced API documentation for proprietary test automation framework in Python using Sphinx.
• Participated in the Agile/Scrum Software Development process - Sprint Planning, Standup, etc.   `,
        "Undergraduate Teaching Assistant": `  • Conducted weekly recitations, created quizzes/mock exams, graded assignments, and hosted office hours for students in CS0445 Algorithms and Data Structures & CS0401 Intermediate Programming in Java.`,

         "Web Dev Intern @ YouthPlaces": `  • Modified the organization’s website to monitor website traffic and digital risk rates using HTML and JS.
• Added features to reflect real time events, programs and donations using Bootstrap, Flask, Sphinx and WordPress.`
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
