import React from 'react';

interface HomeProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({ sectionRef }) => {
    const sectionStyle = {
        height: '100vh'
    };
    return (
        <div ref={sectionRef} style={sectionStyle}>
            <h1>Home</h1>
            <p>Welcome to our website!</p>
        </div>
    );
};

export default Home;
