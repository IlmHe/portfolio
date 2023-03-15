import React from 'react';
import {animated, useSpring} from '@react-spring/web'
import './about.css';
import {useInView} from 'react-intersection-observer';
import resumePDF from '../../resume/ResumeIlmarHeinonen.pdf'

interface AboutProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'ResumeIlmarHeinonen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const About: React.FC<AboutProps> = ({sectionRef}) => {


    const {ref, inView} = useInView({
        threshold: 0, // adjust the threshold to your liking
        triggerOnce: false // set to false to trigger the animation every time it's in view
    });

    const animationConfig = useSpring({
        from: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
        to: {opacity: inView ? 1 : 0, transform: inView ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)'},
        config: {duration: 500, mass: 2, tension: 10}
    });

    const fadeinConfig = useSpring({
        from: {opacity: 0},
        to: {opacity: inView ? 1 : 0},
        config: {duration: 500}
    });


    return (
        <div ref={sectionRef} className="wrapperDivAbout">
            <animated.div ref={ref} style={animationConfig} className="aboutDiv">
                <img src="https://i.imgur.com/psJrcmg.png" alt="about"/>
            </animated.div>
            <animated.div className="textDiv" style={fadeinConfig}>
                <h1>About me</h1>
                <div id="textDiv">
                <p>I have a strong enthusiasm for technology and the endless possibilities it offers. My interest lies in full-stack development, cloud technologies, and DevOps practices. I believe that these fields (and many, many more) offer exciting opportunities for innovation and growth in the tech industry.</p>
                <p>Throughout my academic journey, I have actively sought out opportunities to learn more about these areas, taking on various projects and coursework that have deepened my understanding and knowledge. I am constantly looking for ways to expand my skills and knowledge base to stay current with the latest advancements in the industry.</p>
                </div>
                <div className="btnDiv">
                    <button id="downloadBtn" type="submit" onClick={downloadResume} >Download my resume (PDF)</button>
                </div>
            </animated.div>

        </div>

    );
};

export default About;
