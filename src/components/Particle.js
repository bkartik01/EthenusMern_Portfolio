import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 1,
                  },
                background: {
                    color: {
                        value: "#282c34",
                    },
                },
                fpsLimit: 40,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        // enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    // collisions: {
                    //     enable: true,
                    // },
                    move: {
                        direction: "random",
                        enable: true,
                        // outModes: {
                        //     default: "bounce",
                        // },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "image",
                        image: [
                            {
                            src: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
                            width: 20,
                            height: 20,
                            },
                            {
                                src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                                width: 20,
                                height: 20,
                            },
                            {
                                src: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png",
                                width: 20,
                                height: 20,
                            },
                    ]
                    },
                    size: {
                        value: { min: 1, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>
    );
};

export default Particle;