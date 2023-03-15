import React, {useEffect, useState} from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab.faGithub);
library.add(fab.faLinkedin);

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

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= window.innerHeight - (window.innerHeight * 0.07)) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={`navClass ${isFixed ? "fixed" : ""}`}>
            <ul className="navText">
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
            <ul>
                <li className="icons">
                    <a href="https://github.com/IlmHe" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li className="icons">
                    <a href="https://www.linkedin.com/in/ilmar/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
