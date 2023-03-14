import React from 'react';

interface IndexProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<IndexProps> = ({sectionRef}) => {
    const sectionStyle = {
        height: '100vh'
    };

    return (
        <div ref={sectionRef} style={sectionStyle}>
            <h1>Contact</h1>
            <p>Get in touch with us.</p>
        </div>
    );
};


export default Contact;
