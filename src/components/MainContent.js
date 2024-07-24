// Importing necessary React hooks and components
import React, { useState, useCallback } from 'react'; // Import useState and useCallback hooks from React
import CustomImage from './CustomImage'; // Import CustomImage component
import useTypewriter from '../hooks/Typewriter'; // Import custom hook for typewriter effect
import QuestionAnswer from './QuestionAnswer'; // Import QuestionAnswer component
import './MainContent.css'; // Import CSS file for styling

// Define the MainContent component
const MainContent = () => {
    // Define state variables
    const [showOptions, setShowOptions] = useState(false); // State to show/hide options
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // State to track selected option index
    const [question, setQuestion] = useState(''); // State to store the current question
    const [answer, setAnswer] = useState(''); // State to store the current answer
    const [isAnswering, setIsAnswering] = useState(false); // State to indicate if answering is in progress

    // Callback function to handle completion of typewriter effect
    const handleTypewriterComplete = useCallback(() => {
        if (!isAnswering) {
            setShowOptions(true); // Show options if not answering
        } else {
            setIsAnswering(false); // Reset answering state
            setShowOptions(true); // Show options
        }
    }, [isAnswering]); // Dependency array includes isAnswering

    // Use the custom typewriter hook to generate the initial message
    const initialMessage = useTypewriter(
        "   Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her. To begin, select an option from the following to know more about her profile!",
        handleTypewriterComplete // Callback to run when typewriter effect completes
    );

    // Handle button click event
    const handleButtonClick = (index) => {
        const selectedOption = options[index]; // Get the selected option
        setSelectedOptionIndex(index); // Set the selected option index
        setQuestion(selectedOption.label); // Set the question based on the selected option
        setAnswer(getAnswerForQuestion(selectedOption.label)); // Set the answer based on the question
    };

    // Function to get the answer for a given question
    const getAnswerForQuestion = (question) => {
        switch(question) { // Switch statement to determine answer based on question
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

    // Array of option objects with labels
    const options = [
        { label: "Give me a quick introduction to Samika" },
        { label: "What's it like to work with Samika?" },
        { label: "What is she like outside work?" },
        { label: "I'm bored and I want to play a game" },
    ];

    // Handle completion of the answer
    const handleAnswerComplete = () => {
        setSelectedOptionIndex(null); // Reset selectedOptionIndex
        setShowOptions(true); // Show options again
    };

    // Return the JSX to render the component
    return (
        <div className="main-content"> {/* Main content container */}
            <div className="chat-header"> {/* Chat header */}
                <span>Sam's GPT</span> {/* Header text */}
            </div>
            <div className="chat-messages"> {/* Chat messages container */}
                <div className="message"> {/* Message container */}
                    <CustomImage /> {/* Custom image component */}
                    <div className="message-content"> {/* Message content */}
                        <p>{initialMessage}</p> {/* Display initial message */}
                    </div>
                </div>
            </div>
            <div className="options-with-image"> {/* Options container with image */}
                {showOptions && ( /* Conditional rendering of options */
                    <div className="options-container"> {/* Options container */}
                        {options.map((option, index) => ( /* Map over options to create buttons */
                            selectedOptionIndex === null || selectedOptionIndex === index ? ( /* Conditional rendering of selected option */
                                <Button
                                    key={index} // Unique key for each button
                                    label={option.label} // Button label
                                    onClick={() => handleButtonClick(index)} // Button click handler
                                    isSelected={selectedOptionIndex === index} // Is the button selected
                                />
                            ) : null
                        ))}
                        <img src="https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png" alt="icon" className="side-icon" /> {/* Side icon */}
                    </div>
                )}
            </div>
            {selectedOptionIndex !== null && ( /* Conditional rendering of answer */
                <div className="chat-messages"> {/* Chat messages container */}
                    <QuestionAnswer question={question} answer={answer} /> {/* Question and answer component */}
                </div>
            )}
        </div>
    );
};

// Styles for the Button component
const styles = {
    Button: {
        cursor: 'pointer', // Pointer cursor on hover
        width: '288px', // Button width
        height: '44px', // Button height
        padding: '0px 8px', // Button padding
        border: '0', // No border
        boxSizing: 'border-box', // Border-box sizing
        borderRadius: '22px', // Rounded corners
        backgroundColor: '#2f2f2f', // Background color
        color: '#ececec', // Text color
        fontSize: '13px', // Font size
        fontFamily: 'Roboto', // Font family
        lineHeight: '18px', // Line height
        outline: 'none', // No outline
        margin: '5px 0', // Margin
        display: 'flex', // Flexbox layout
        alignItems: 'center', // Align items center
        justifyContent: 'center', // Justify content center
    },
    SelectedButton: {
        backgroundColor: '#444', // Background color for selected button
    },
};

// Button component
const Button = (props) => {
    return (
        <button
            style={{ ...styles.Button, ...(props.isSelected ? styles.SelectedButton : {}) }} // Apply styles and selected state styles
            onClick={props.onClick} // Click handler
        >
            {props.label} {/* Button label */}
        </button>
    );
};

export default MainContent; // Export MainContent component as default
