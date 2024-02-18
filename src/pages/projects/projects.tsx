import React from 'react';
import "./projects.css";
import cardsNMonsters from '../../assets/cardsNMonsters.jpg'
import Kotlin from '../../assets/Kotlin.png'
import jUnit from '../../assets/junit.png'
import SQLite from '../../assets/sqlite.png'
import docker from '../../assets/docker.png'
import k8s from '../../assets/k8s.png'
import gcp from '../../assets/gcp.png'
import fibonacci from '../../assets/fibonacci.png'
import decar from '../../assets/decar.png'
import swift from '../../assets/swift.png'
import swiftui from '../../assets/swiftui.png'
import git from '../../assets/git.png'
import react from '../../assets/react.png'
import typescriptlogo from '../../assets/typescript.png'
import portfolio from '../../assets/portfolio.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fab.faGithub);
interface ProjectsProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({sectionRef}) => {

    return (
        <div ref={sectionRef} className={"projectsWrapper"}>
            <h1 id="projectsId">Projects</h1>
            <div className="firstProject">
                <p><h1>Cards & Monsters</h1>
                    This is a mobile app that lets you create a deck of cards with unique abilities and use them to battle virtual monsters.
                    You can track your progress and unlock achievements as you battle and complete different challenges.
                    <button onClick={() => window.open('https://github.com/ohuji/Cards-Monsters', '_blank')}>Source Code</button>
                    <img src={Kotlin} id="iconIdnonfab" alt="kotlin logo" className="iconsFirst"></img>
                    <img src={jUnit} id="iconIdnonfab" alt="junit logo" className="iconsFirst"></img>
                    <img src={SQLite} id="iconIdnonfab" alt="sqlite logo" className="iconsFirst"></img>

                </p>
                <div onClick={() => window.open('https://github.com/ohuji/Cards-Monsters', '_blank')}>
                    <img className="imgDiv" src={cardsNMonsters} alt="image of cards and monsters project"></img>
                </div>
            </div>
            <div id="marginId" className="secondProject">
                <p><h1>Fibonacci Calculator</h1>
                    Overengineered Fibonacci calculator, for dockerizing and deploying to kubernetes with complex configurations.
                    Also features an automated CI pipeline with GitHub Actions and deployment to Google Cloud.
                    <img src={docker} id="iconIdnonfab" alt="Docker logo" className="iconsSecond"></img>
                    <img src={k8s} id="iconIdnonfab" alt="Kubernetes logo" className="iconsSecond"></img>
                    <img src={gcp} id="iconIdnonfab" alt="Google cloud platform logo" className="iconsSecond"></img>
                    <button onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>Source Code</button>
                </p>
                <div id="decar" onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>
                    <img className="imgDiv" src={fibonacci} alt="image of fibonacci calculator project"></img>
                </div>
            </div>
            <div id="marginId" className="firstProject">
                <p><h1>DecAR</h1>
                    DecAR works to tackle the problem of manual labour and its costs during the interior design phase,
                    and allows you to visualize what your dream apartment will look like without the trouble, using AR.
                    <button id="decarId" onClick={() => window.open('https://github.com/jannhakk/DecAR-k2', '_blank')}>Source Code</button>
                    <img src={swift} id="iconIdnonfab" alt="swift logo" className="iconsFirst"></img>
                    <img src={swiftui} id="iconIdnonfab" alt="swiftui logo" className="iconsFirst"></img>
                    <img src={git} id="iconIdnonfab" alt="git logo" className="iconsFirst"></img>

                </p>
                <div id="decar" onClick={() => window.open('https://github.com/jannhakk/DecAR-k2', '_blank')}>
                    <img className="imgDiv" src={decar} alt="image of decar project"></img>
                </div>
            </div>
            <div id="marginId" className="secondProject">
                <p><h1>Portfolio Page</h1>
                    The very page you're on! Built with React and TypeScript and deployed to Heroku.
                    Used to showcase my awesome projects and skills.
                    <img src={react} id="iconIdnonfab" alt="Docker logo" className="iconsSecond"></img>
                    <img src={typescriptlogo} id="iconIdnonfab" alt="Kubernetes logo" className="iconsSecond"></img>
                    <img src={git} id="iconIdnonfab" alt="Google cloud platform logo" className="iconsSecond"></img>
                    <button onClick={() => window.open('https://github.com/IlmHe/portfolio', '_blank')}>Source Code</button>
                </p>
                <div id="decar" onClick={() => window.open('https://github.com/IlmHe/portfolio', '_blank')}>
                    <img className="imgDiv"  src={portfolio} alt="image of portfolio project"></img>
                </div>
            </div>
            <div className="afterProjectText">
                <p>And more on my GitHub: <a className="iconsProject" href="https://github.com/IlmHe" target="_blank">
                    <FontAwesomeIcon id="afterProjectIcon" icon={['fab', 'github']} />
                </a>
                </p>
            </div>
        </div>
    );
};

export default Projects;
