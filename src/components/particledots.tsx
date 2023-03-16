import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Container, Engine} from "tsparticles-engine";
import "./particledots.css";

const Particledots = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles2"
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
                                enable: false,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: false,
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
                            enable: false,
                            opacity: 1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "bottom",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 4},
                        },
                    },
                    detectRetina: true,
                }}
            height="100vh"
        />
    )
};

export default Particledots;
