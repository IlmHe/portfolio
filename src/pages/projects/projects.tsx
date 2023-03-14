import React from 'react';

interface ProjectsProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({sectionRef}) => {
    const sectionStyle = {
        height: '100vh'
    };
    return (
        <div ref={sectionRef} style={sectionStyle}>
            <h1>Projects</h1>
            <p>Check out our projects.</p>
        </div>
    );
};

export default Projects;
