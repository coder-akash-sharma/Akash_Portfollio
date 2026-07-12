import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 60,
        },
        color: {
          value: ["#3B82F6", "#8B5CF6"],
        },
        links: {
          enable: true,
          color: "#3B82F6",
          opacity: 0.2,
          distance: 150,
        },
        move: {
          enable: true,
          speed: 1,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 2,
        },
      },
    }),
    []
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-20"
      />
    </ParticlesProvider>
  );
}

export default ParticlesBackground;