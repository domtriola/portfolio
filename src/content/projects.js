// Template:
// {
//   title: '',
//   headline: '',
//   about: '',
//   image: {
//     path: '',
//     alt: '',
//   },
//   moreInfo: {
//     text: '',
//     path: '',
//   },
//   links: [
//     {
//       type: 'live',
//       iconPath: '',
//       url: '',
//     },
//     {
//       type: 'github',
//       iconPath: '/images/icons/GitHub-Mark-Light-120px-plus.png',
//       url: '',
//     },
//   ],
// },

export default [
  {
    title: 'SpaceTyper',
    headline: 'A galactic dexterity adventure',
    about: `
      My typing speed used to be... not great. TypeRacer was a fun way to
      practice, but one day I thought, "Racing cars is alright, but I'd really
      like to race spaceships!" And so I built Spacetyper.
    `,
    image: {
      path: '/images/projects/spacetyper/screenshot.png',
      alt: `
        The Spacetyper homescreen. Ships at the starting line of an
        intergalactic race.
      `,
    },
    moreInfo: {
      text: 'Lift off',
      path: 'http://www.spacetyper.com',
    },
    links: [
      {
        type: 'live',
        iconPath: '/images/icons/globe.png',
        url: 'http://www.spacetyper.com',
      },
      {
        type: 'github',
        iconPath: '/images/icons/GitHub-Mark-Light-120px-plus.png',
        url: 'https://github.com/domtriola/space-typer',
      },
    ],
  },
  {
    title: 'Audio Visualizer',
    headline: 'A synesthesia experience',
    about: `
      Does not yet support sight to sound, taste to sight, or sound to taste.
      Smellovision coming soon.
    `,
    image: {
      path: '/images/projects/audiovisualizer/screenshot.png',
      alt: `
        A screenshot of the audio visualizer display. Ripples in rainbow
        colors.
      `,
    },
    moreInfo: {
      text: 'See the music',
      path: 'https://audio-visualizer-v2.herokuapp.com/',
    },
    links: [
      {
        type: 'live',
        iconPath: '/images/icons/globe.png',
        url: 'https://audio-visualizer-v2.herokuapp.com/',
      },
      {
        type: 'github',
        iconPath: '/images/icons/GitHub-Mark-Light-120px-plus.png',
        url: 'https://github.com/domtriola/audio-visualizer-v2',
      },
    ],
  },
  {
    title: 'Cellular Automata',
    headline: 'A touch of ordered chaos',
    about: `
      Seeing Conway's "Game of Life" and "Rock Paper Scissors" automata
      simulations made me curious about what other patterns might arise from a
      bunch of "organisms" and a simple set of rules.
    `,
    image: {
      path: '/images/projects/cellularautomata/screenshot.png',
      alt: `
        A screenshot of the cellular automata app. A grid of cells of various
        colors with control panels for parameters.
      `,
    },
    moreInfo: {
      text: 'Experiment',
      path: 'https://dominicktriola.com/cellular-automata/',
    },
    links: [
      {
        type: 'live',
        iconPath: '/images/icons/globe.png',
        url: 'https://dominicktriola.com/cellular-automata/',
      },
      {
        type: 'github',
        iconPath: '/images/icons/GitHub-Mark-Light-120px-plus.png',
        url: 'https://github.com/domtriola/cellular-automata',
      },
    ],
  },
  {
    title: 'Bot Chat',
    headline: 'CleverBot says hi',
    about: `
      I made a chat application to learn Elixir.
    `,
    image: {
      path: '/images/projects/botchat/screenshot.png',
      alt: `
        A screenshot of the Bot Chat app. A chat window is open with a list of
        recent messages.
      `,
    },
    links: [
      {
        type: 'github',
        iconPath: '/images/icons/GitHub-Mark-Light-120px-plus.png',
        url: 'https://github.com/domtriola/bot-chat',
      },
    ],
  },
];
