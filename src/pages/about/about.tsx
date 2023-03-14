import React from 'react';

interface AboutProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({sectionRef}) => {
    return (
        <div ref={sectionRef}>
            <h1>About</h1>
            <p>This is the about page.</p>
        </div>
    );
};

export default About;
