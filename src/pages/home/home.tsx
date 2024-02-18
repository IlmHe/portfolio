import React from 'react';
import './home.css';
import Particle from "../../components/particle";

interface HomeProps {
    sectionRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
}


const Home: React.FC<HomeProps> = ({sectionRef, aboutRef}) => {

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div ref={sectionRef} className="wrapperDiv">

            <div className="firstDiv">
                Hello, I'm <span id="Ilmar">Ilmar</span>.
            </div>
            <div className="secondDiv">
                I am a <span className="typewriter" aria-label="developer">
            </span>
            </div>
            <div className="thirdDiv">
                <button id="workBtn" onClick={() => scrollToRef(aboutRef)}>See my work</button>
            </div>
            <Particle/>
        </div>
    );
};

export default Home;
