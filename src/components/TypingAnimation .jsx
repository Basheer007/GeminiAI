import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setDisplayedText(text.substring(0, currentIndex + 1));
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5); // Adjust typing speed here (milliseconds)

        return () => clearInterval(typingInterval);
    }, [currentIndex, text]);

    return <div className='text-[#dcd9dc] flex-1 text-xs font-[300] leading-5 pb-28 md:text-base' dangerouslySetInnerHTML={{ __html: displayedText }}></div>;
};

export default TypingAnimation;
