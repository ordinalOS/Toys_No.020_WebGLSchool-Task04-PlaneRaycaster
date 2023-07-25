const isMatchMediaWidth = window.matchMedia("(max-width: 768px)").matches;

export const Config = {
  plane: {
    size: .1,
    scale: {
      init: 1,
      anime: isMatchMediaWidth ? 4 : 8,
    },
  },
  camera: {
    zoom: {
      init: 0.04,
      anime: 0,
    },
    position: {
      init: {
        x: -8,
        y: 9,
        z: 9,
      },
      anime: {
        x: 0,
        y: 1,
        z: 0,
      },
    },
    quaternion: {
      init: {
        x: -0.2948488033976018,
        y: -0.3372367651636157,
        z: -0.11210131524719265,
        w: 0.8869999112045233,
      },
      anime: {
        x: -0.7071064276330687,
        y: 0,
        z: 0,
        w: 0.7071071347398497,
      },
    },
    rotation: {
      init: {
        x: -0.7853981633974484,
        y: -0.5611404261704191,
        z: -0.48903721757720997,
      },
      anime: {
        x: -1.570795326794897,
        y: 0,
        z: 0,
      },
    },
  },
};
