

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const TechStackData = [
//     { title: "React.js", 
//       img: "/assets/react.svg" 
//     },
//     { 
//       title: "Next.js", 
//       img: "/assets/next.svg" 
//     },
//     { 
//       title: "Node.js", 
//       img: "/assets/node-js.svg"
//     },
//     { title: "Express.js", 
//       img: "/assets/express.svg"
//     },
//     { 
//       title: "MongoDB", 
//       img: "/assets/mongodb.svg" 
//     },
//     { 
//       title: "MySQL", 
//       img: "/assets/mysql-logo.svg" 
//     },
//     { 
//       title: "JavaScript", 
//       img: "/assets/javascript.svg" 
//     },
//     {
//       title: 'Three.js',
//       img: '/assets/three-icon.png',
//     },
//     {
//       title: 'Framer Motion',
//       img: '/assets/framer.png',
//     },
//     {
//       title: 'Tailwind CSS',
//       img: '/assets/tailwindcss.png',
//     }
// ]

export const TechStackData = [
  {
    name: "HTML 5",
    icon: "/assets/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/reactjs.png",
  },
  {
    name: "Next JS",
    icon: "/assets/nextjs.svg",
  },
  {
    name: "Node JS",
    icon: "/assets/nodejs.png",
  },
  { 
    name: "Express.js", 
    icon: "/assets/express.svg"
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: "/assets/redux.png",
  // },
  {
    name: "Tailwind CSS",
    icon: "/assets/tailwind.png",
  },
  
  {
    name: "MongoDB",
    icon: "/assets/mongodb.png",
  },
  {
    name: "MySQL",
    icon: "/assets/mysql.png",
  },
  {
    name: "Git",
    icon: "/assets/git.png",
  },
  // {
  //   name: 'Three.js',
  //   icon: '/assets/three-icon.png',
  // },
  {
    name: "C++",
    icon: "/assets/cpp.png",
  },
  // {
  //   name: 'Framer Motion',
  //   icon: '/assets/framer.png',
  // },
]


export const clientReviews = [
  {
    id: 1,
    name: 'Shreya Patil',
    position: 'Software Engineer at Capgemini',
    img: '/assets/reviewshreya.jpg',
    review:
      'Shreyas is an exceptional developer with a knack for creating scalable and robust solutions. His ability to turn complex requirements into functional and user-friendly projects is truly commendable. Highly recommend his expertise for any challenging tasks.',
  },
  {
    id: 2,
    name: 'Paramveer Patil',
    position: 'Software Architect at Siemens',
    img: '/assets/reviewparam.jpeg',
    review:
      'Working with Shreyas was an absolute pleasure. He provided innovative solutions for our project, ensuring timely delivery without compromising quality. His commitment and professionalism stand out.',
  },
  {
    id: 3,
    name: 'Saurabh Patil',
    position: 'Consultant at Cognizant',
    img: '/assets/reviewsau.jpeg',
    review:
      'Shreyas demonstrated excellent problem-solving skills and technical expertise in our collaboration. His attention to detail and ability to deliver high-quality results make him a standout professional in web development.',
  },
  {
    id: 4,
    name: 'Varad Patil',
    position: 'Full Stack Developer at Altair',
    img: '/assets/reviewvarad.jpeg',
    review:
      'Shreyas’s dedication to his work is inspiring. He combines technical skills with a creative approach to deliver outstanding results. His projects showcase his ability to build scalable and efficient solutions.',
  },
];



export const myProjects = [
  {
    title: 'VirtualInterviewPrep - AI-Based Mock Interview Platform',
    desc: 'An innovative platform designed for conducting mock interviews with advanced AI-driven features to prepare users for their dream roles.',
    subdesc:
      'Incorporates Gemini AI to generate role-specific questions dynamically and offers AI-powered feedback for personalized learning and career readiness.',
    href: 'https://virtualinterviewprep.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      // border: '0.2px solid #36201D',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: 'Gemini Ai',
        path: '/assets/google_gemini_logo.svg',
      },
    ],
  },
  {
    title: 'hooks-library-react - Reusable Custom Hooks Library',
    desc: 'A comprehensive npm package offering reusable and optimized custom hooks for React developers to streamline common development tasks.',
    subdesc:
      'Features include data fetching, debouncing, local storage management, and state tracking, designed for performance and ease of use.',
    href: 'https://www.npmjs.com/package/hooks-library-react',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/npm.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      // border: '0.2px solid #17293E',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
        
      },
      {
        id: 2,
        name: 'NPM',
        path: 'assets/npm.svg',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'StyleSavvy - E-commerce Website',
    desc: 'A responsive e-commerce platform providing seamless shopping experiences with features like product browsing, filtering, and secure cart management.',
    subdesc:
      'Includes a robust admin dashboard for inventory management and order tracking, with secure JWT-based authentication and file handling via Multer.',
    href: 'https://stylsavvy.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo-stylesaavy.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/node-js.svg',
      },
      {
        id: 3,
        name: 'Express.js',
        path: '/assets/express.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'WorkoutHub - Fitness Website',
    desc: 'A comprehensive fitness platform designed to empower users with a vast library of exercises and personalized health insights.',
    subdesc:
      'WorkoutHub features over 1,000 instructional exercise GIFs, AI-powered BMI calculation, and YouTube video recommendations, creating an engaging and user-friendly experience.',
    href: 'https://workouthub.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo-workout.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      // border: '0.2px solid #0E2D58',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Material Ui',
        path: 'assets/material-ui.svg',
      },
      {
        id: 3,
        name: 'Gemini Ai',
        path: '/assets/google_gemini_logo.svg',
      },
    ],
  },
];




export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];