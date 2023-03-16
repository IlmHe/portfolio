import React, {useEffect, useState} from 'react';
import "./projects.css";
import cardsNMonsters from '../../assets/cardsNMonsters.jpg'
import Kotlin from '../../assets/Kotlin.png'


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
                    <img src={Kotlin} className="iconsFirst"></img>

                </p>
                <div>
                    <img className="imgDiv" src={cardsNMonsters}></img>
                </div>
            </div>
        </div>
    );
};

export default Projects;
