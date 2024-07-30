import React, { useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';

const QuestionAnswer = ({ question, answer, onComplete }) => {
    const handleTypewriterComplete = useCallback(() => {
        if (onComplete) onComplete(); // Call the onComplete function if provided
    }, [onComplete]);

    const answerText = useTypewriter(answer, handleTypewriterComplete);

    return (
        <div className="message">
            <CustomImage />
            <div className="message-content">
                <p dangerouslySetInnerHTML={{ __html: answerText.replace(/\n/g, '<br />') }}></p>
            </div>
        </div>
    );
};

export default QuestionAnswer;
