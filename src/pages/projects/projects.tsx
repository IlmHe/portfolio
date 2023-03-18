import React, {useEffect, useState} from 'react';
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
                    <img src={Kotlin} id="iconId" alt="kotlin logo" className="iconsFirst"></img>
                    <img src={jUnit} id="iconId" alt="junit logo" className="iconsFirst"></img>
                    <img src={SQLite} id="iconId" alt="sqlite logo" className="iconsFirst"></img>

                </p>
                <div onClick={() => window.open('https://github.com/ohuji/Cards-Monsters', '_blank')}>
                    <img className="imgDiv" src={cardsNMonsters}></img>
                </div>
            </div>
            <div className="secondProject">
                <p><h1>Fibonacci Calculator</h1>
                    Overengineered Fibonacci calculator, for dockerizing and deploying to kubernetes with complex configurations.
                    Also features an automated CI pipeline with GitHub Actions and deployment to Google Cloud.
                    <img src={docker} id="iconId" alt="Docker logo" className="iconsSecond"></img>
                    <img src={k8s} id="iconId" alt="Kubernetes logo" className="iconsSecond"></img>
                    <img src={gcp} id="iconId" alt="Google cloud platform logo" className="iconsSecond"></img>
                    <button onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>Source Code</button>


                </p>
                <div id="fibonacci" onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>
                    <img className="imgDiv" src={fibonacci}></img>
                </div>
            </div>
            <div className="firstProject">
                <p><h1>DecAR</h1>
                    DecAR works to tackle the problem of manual labour and its costs during the interior design phase,
                    and allows you to visualize what your dream apartment will look like without the trouble, using AR.
                    <button id="decarId" onClick={() => window.open('https://github.com/jannhakk/DecAR-k2', '_blank')}>Source Code</button>
                    <img src={swift} id="iconId" alt="swift logo" className="iconsFirst"></img>
                    <img src={swiftui} id="iconId" alt="swiftui logo" className="iconsFirst"></img>
                    <img src={git} id="iconId" alt="git logo" className="iconsFirst"></img>

                </p>
                <div id="decar" onClick={() => window.open('https://github.com/jannhakk/DecAR-k2', '_blank')}>
                    <img className="imgDiv" src={decar}></img>
                </div>
            </div>
            <div className="secondProject">
                <p><h1>Fibonacci Calculator</h1>
                    Overengineered Fibonacci calculator, for dockerizing and deploying to kubernetes with complex configurations.
                    Also features an automated CI pipeline with GitHub Actions and deployment to Google Cloud.
                    <img src={docker} id="iconId" alt="Docker logo" className="iconsSecond"></img>
                    <img src={k8s} id="iconId" alt="Kubernetes logo" className="iconsSecond"></img>
                    <img src={gcp} id="iconId" alt="Google cloud platform logo" className="iconsSecond"></img>
                    <button onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>Source Code</button>


                </p>
                <div onClick={() => window.open('https://github.com/IlmHe/docker-k8s-gc', '_blank')}>
                    <img className="imgDiv" src={fibonacci}></img>
                </div>
            </div>
        </div>
    );
};

export default Projects;
