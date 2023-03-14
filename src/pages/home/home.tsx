import React from 'react';

interface HomeProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({ sectionRef }) => {
    return (
        <div ref={sectionRef}>
            <h1>Home</h1>
            <p>Welcome to our website!</p>
        </div>
    );
};

export default Home;
