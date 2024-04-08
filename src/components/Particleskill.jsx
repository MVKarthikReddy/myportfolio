
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticleSkill = (props) => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
  
    const options = useMemo(
        () => ({
          fpsLimit: 120,
          particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#B3B3B3"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: false,
            speed: 40,
            size_min: 0.1,
            syno: false
          },
          line_linked: {
            enable: false,
            distance: 150, 
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
          detectRetina: true,
        }
    }),
        [],
      );
  
  
    return <Particles id={props.id} init={particlesLoaded} options={options} />; 
  };

  export default ParticleSkill;