import React from 'react';

interface NavProps {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavProps> = ({homeRef, aboutRef, projectsRef, contactRef}) => {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => scrollToRef(homeRef)}>Home</button>
                </li>
                <li>
                    <button onClick={() => scrollToRef(aboutRef)}>About</button>
                </li>
                <li>
                    <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
                </li>
                <li>
                    <button onClick={() => scrollToRef(contactRef)}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
