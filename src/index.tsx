import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/nav";
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import './index.css';
import Particle from "./components/particledots";
import {animated, useSpring} from "@react-spring/web";
import {useInView} from "react-intersection-observer";
import { HashRouter } from "react-router-dom"



const App: React.FC = () => {


    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

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

    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const fadeinConfig = useSpring({
        from: {opacity: 0},
        to: {opacity: inView ? 1 : 0},
        config: {duration: 4000}
    });

    return (
        <div>
            <div>
                <Navbar
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
            </div>
            <animated.div ref={ref} style={fadeinConfig} className={`particleWrapper ${isFixed ? "fixed" : ""}`}>
                <Particle/>
            </animated.div>
            <Home sectionRef={homeRef} aboutRef={aboutRef}/>
            <About sectionRef={aboutRef}/>
            <Projects sectionRef={projectsRef}/>
            <Contact sectionRef={contactRef}/>

        </div>

    );
};

ReactDOM.render(
    <HashRouter><App /></HashRouter>,
    document.getElementById('root')
);
