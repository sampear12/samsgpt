import { useState, useEffect } from 'react';

const useTypewriter = (text, onComplete) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        
        // Detect if the user is on a mobile device based on screen width
        const isMobile = window.innerWidth <= 600;
        
        // Set a faster speed for mobile devices
        const speed = isMobile ? 4 : 4; // Adjust speed as needed, 50ms for mobile, 100ms for desktop

        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(intervalId);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, onComplete]);

    return displayedText;
};

export default useTypewriter;
