import { useState, useEffect } from 'react';

const useTypewriter = (text, onComplete) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 1;
        const intervalId = setInterval(() => {
            if (currentIndex < text.length-1) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(intervalId);
                if (onComplete) onComplete();
            }
        }, 10);
        return () => clearInterval(intervalId);
    }, [text, onComplete]);

    return displayedText;
};

export default useTypewriter;
