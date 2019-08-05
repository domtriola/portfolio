import projects from './projects';

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
    something new, or to itch a technological or creative curiosity. I hope you
    find some amusement in the projects. Thanks for stopping by!
  `,
  projects,
};
