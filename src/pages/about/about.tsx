import React from 'react';

interface AboutProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({sectionRef}) => {
    const sectionStyle = {
        height: '100vh'
    };
    return (
        <div ref={sectionRef} style={sectionStyle}>
            <h1>About</h1>
            <p>This is the about page.</p>
        </div>
    );
};

export default About;
