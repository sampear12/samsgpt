import React, { useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';

// In QuestionAnswer.js
const QuestionAnswer = ({ question, answer, onComplete }) => {
    const handleTypewriterComplete = useCallback(() => {
        if (onComplete) onComplete(); // Call the onComplete function if provided
    }, [onComplete]);

    const answerText = useTypewriter(answer, handleTypewriterComplete);

    return (
        <div className="message">
            <CustomImage />
            <div className="message-content">
                <p>{answerText}</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;
