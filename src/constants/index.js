import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MCA",
    company_name: "Vellore Institute of Technology, Bhopal",
    icon: "./src/assets/friends/vit.jpg",
    iconBg: "#383E56",
    date: "August 2022 - May 2024",
    points: [
      "The course typically covers topics such as programming languages, algorithms and data structures,",
      "computer networks, database management systems, software engineering, operating systems, web technologies, and computer graphics.",
      "Programming languages learned: HTML, CSS, JS, React-JS, Java",
      "Number of projects done: 3",
      "CGPA: 8.64",
    ],
  },
  {
    title: "BSc.",
    company_name: "Deen Dayal Upadhyaya College, University of Delhi",
    icon: "./src/assets/friends/du.jpg",
    iconBg: "#E6DEDD",
    date: "Aug 2018 - May 2021",
    points: [
      "BSc Computer Science is an undergraduate degree program that focuses on the study of computer systems, software development, and computer networks.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality content.",
      "Programming languages learned: Python, Embedded C",
      "Number of projects done: 7",
      "CGPA: 7.424",
    ],
  },
  {
    title: "12th Board",
    company_name: "Jharkhand Academic Council, Jharkhand",
    icon: "./src/assets/friends/netarhat.png",
    iconBg: "#383E56",
    date: "April 2016 - Mar 2018",
    points: [
      "The Gurukul",
      "The whole course was designed for the wholistic development of a student",
      "Programming language learned : C++, MySQL",
      "Percentage: 82.2%",
    ],
  },
  {
    title: "10th Board",
    company_name: "Jharkhand Academic Council, Jharkhand",
    icon: "./src/assets/friends/netarhat.png",
    iconBg: "#E6DEDD",
    date: "- Mar 2016",
    points: [
      "The Gurukul",
      "The whole course was designed for the wholistic development of a student",
      "Programming language learned : C++",
      "Percentage: 90.2%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nik proved me wrong.",
    name: "Saurabh Salvi",
    designation: "Friend",
    company: "Vit Bhopal",
    image: "./src/assets/friends/3.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nik does.",
    name: "Satyam Bhargav",
    designation: "Friend",
    company: "Vit Bhopal",
    image: "./src/assets/friends/2.jpg",
  },
  {
    testimonial:
      "After Nik optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Shivanshu Mishra",
    designation: "Friend",
    company: "Vit Bhopal",
    image: "./src/assets/friends/1.jpg",
  },
  //{
  //   testimonial:
  //     "What he(Nik) is doing is absolutely phenominal..",
  //   name: "Dibendu Mahata",
  //   designation: "Friend",
  //   company: "Vit Bhopal",
  //   image: "./src/assets/friends/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I have had the pleasure of working with my friend on several web development projects and I can confidently say that he is a great web developer.",
  //   name: "Ishant Aunchaliya",
  //   designation: "Friend",
  //   company: "Vit Bhopal",
  //   image: "./src/assets/friends/5.jpg",
  // },
  // {
  //   testimonial:
  //     " He is also a reliable and collaborative team player who communicates well and delivers on time. I highly recommend him for any web development project.",
  //   name:"Madan Mohan Garg",
  //   designation: "Friend",
  //   company: "University of Delhi",
  //   image: "./src/assets/friends/6.jpg",
  // },
  // {
  //   testimonial:
  //     "He has a keen eye for design, a solid grasp of the latest technologies and frameworks, and a passion for creating user-friendly and responsive websites.",
  //   name: "Naveen Bara",
  //   designation: "Friend",
  //   company: "University of Delhi",
  //   image: "./src/assets/friends/7.jpg",
  // },
];

const projects = [
  {
    name: "CryptoLens",
    description:
      "Web-based platform that allows user to buy, sell cryptocurrency and NFT's.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/friends/crypto.png",
    source_code_link: "https://github.com/CodingNik91/Cryptolens",
  },
  {
    name: "Fitness Tracker",
    description:
      "Web application that allows user to keep track of their fitness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/friends/ft.png",
    source_code_link: "https://github.com/CodingNik91/Track_Fitness",
  },
  {
    name: "Railway Application",
    description:
      "A comprehensive travel booking platform that allows users to book train tickets, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/friends/railway.png",
    source_code_link: "https://github.com/CodingNik91/face-rec",
  },
];

export { services, technologies, experiences, testimonials, projects };
