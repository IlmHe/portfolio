import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Container, Engine} from "tsparticles-engine";

const Particle = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    fullScreen: {
                        enable: false,
                        zIndex: -1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 150,
                            },
                            grab: {
                                distance: 150,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#413032",
                        },
                        links: {
                            color: "#413032",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 0.8,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            value: {min: 1, max: 7},
                        },
                    },
                    detectRetina: true,
                }}
            height="100vh"
        />
    )
};

export default Particle;
