import React, { useCallback } from 'react';
import CustomImage from './CustomImage';
import useTypewriter from '../hooks/Typewriter';

const QuestionAnswer = ({ answer }) => {
    const handleTypewriterComplete = useCallback(() => {}, []);

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