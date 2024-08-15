import React, { useEffect, useState } from 'react';
import './TutorialOverlay.css';

const TutorialOverlay = ({ onDismiss }) => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const highlightConfigs = [
      { selector: '.top-left-icon', text: 'Click here to collapse the sidebar.' },
      { selector: '.previous-conversations', text: 'Explore other parts of my resume' },
    ];

    const calculateHighlights = () => {
      const newHighlights = highlightConfigs.map(({ selector, text }) => {
        const element = document.querySelector(selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            text,
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height,
          };
        }
        return null;
      }).filter(highlight => highlight !== null);

      setHighlights(newHighlights);
    };

    calculateHighlights();
    window.addEventListener('resize', calculateHighlights);
    return () => window.removeEventListener('resize', calculateHighlights);
  }, []);

  return (
    <div className="tutorial-overlay" onClick={onDismiss}>
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="highlight"
          style={{
            top: `${highlight.top}px`,
            left: `${highlight.left}px`,
            width: `${highlight.width}px`,
            height: `${highlight.height}px`,
          }}
        >
          <div className="highlight-text" style={{ top: `${highlight.height +10}px` }}>
            {highlight.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorialOverlay;
