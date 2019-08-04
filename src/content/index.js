export default {
  logo: {
    text: 'Dominick Triola',
    image: {
      path: '/images/logos/dominick-triola_logo.svg',
      alt: "Dominick's emblem",
    },
  },
  menu: {
    items: [
      {
        text: 'About',
        link: '#about',
      },
      {
        text: 'Projects',
        link: '#projects',
      },
    ],
  },
  tagLine: 'Exploring code with curiosity',
  aboutBlurb: `
    Welcome! Here you will find some things that I have created either to learn
    something new, or to just itch a technological or creative curiosity. I hope
    you find some amusement in the projects. Thanks for stopping by!
  `,
  projects: [
    {
      title: 'SpaceTyper',
      headline: '',
      about: `
        My typing speed used to be... not great. TypeRacer was a fun way to
        practice, but one day I thought, "Racing cars is kind of boring; I'd
        like to race spaceships!" And SpaceTyper was born.
      `,
      image: {
        path: '/images/projects/spacetyper/screenshot.png',
        alt: `
          The Spacetyper homescreen. Ships at the starting line of an
          intergalactic race.
        `,
      },
      moreInfo: {
        text: '',
        path: '',
      },
      links: [
        {
          type: 'live',
          iconPath: '',
          url: 'http://www.spacetyper.com',
        },
        {
          type: 'github',
          iconPath: '',
          url: 'https://github.com/domtriola/space-typer',
        },
      ],
    },
    {
      title: 'Audio Visualizer',
      headline: '',
      about: `
        ...
      `,
      image: {
        path: '/images/projects/audiovisualizer/screenshot.png',
        alt: `
          A screenshot of the audio visualizer display. Ripples in rainbow
          colors.
        `,
      },
      moreInfo: {
        text: '',
        path: '',
      },
      links: [
        {
          type: 'live',
          iconPath: '',
          url: 'https://audio-visualizer-v2.herokuapp.com/',
        },
        {
          type: 'github',
          iconPath: '',
          url: 'https://github.com/domtriola/audio-visualizer-v2',
        },
      ],
    },
  ],
};
