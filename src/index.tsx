import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/nav";
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';



const App: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <React.StrictMode>
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <Home sectionRef={homeRef}/>
            <About sectionRef={aboutRef}/>
            <Projects sectionRef={projectsRef}/>
            <Contact sectionRef={contactRef}/>
        </React.StrictMode>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
