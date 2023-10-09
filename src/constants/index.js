import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    mylogo,
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
      title: "Full stack Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "C++ programmer",
      icon: mylogo,
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
      name: "GitHub",
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
      name: "C++",
      icon: mongodb,
    },
    {
      name: "Framer-motion",
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
      name: "PostgreSQL",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Continuous Learning",
      points: [
        "I have a deep understanding of React, a popular JavaScript library for building user interfaces. I have hands-on experience in developing interactive and responsive web applications using React. ",
        "I have experience in handling user events in React, such as click events and form events.",
        "I have experience in creating full-stack applications with React as the frontend and Node.js as the backend.",
        "I am familiar with the best practices and anti-patterns in React, which helps me write clean, efficient, and maintainable code.",
      ],
    },
    {
      title: "Database ",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Continuous Learning",
      points: [
        "I have a strong understanding of PostgreSQL, a powerful, open-source, object-relational database system.",
        "This includes creating tables, inserting and updating data, and writing complex queries to retrieve data. ",
        " I understand the importance of data integrity and have experience with SQL features such as transactions and constraints to ensure data accuracy and consistency. ",
        "Completed certified course From udemy",
      ],
    },
    {
      title: "C++ Programmer",
      company_name: "C++",
      icon: shopify,
      iconBg: "#383E56",
      date: "Continuous Learning",
      points: [
        "I have a solid foundation in C++, a powerful and versatile programming language widely used in system/software development, game development, and embedded systems. ",
        " am proficient in using C++ Standard Library and Boost Library.",
        "I understand how to use various containers like vectors, lists, and maps, algorithms like sort and find, and utilities for tasks like string manipulation.",
        "I am a quick learner and am always eager to learn new features and libraries in C++.",
      ],
    },
    {
      title: "Tailwind CSS and Responsiveness",
      company_name: "Tailwind",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Continuous Learning",
      points: [
        "I have a solid understanding of Tailwind CSS, a utility-first CSS framework that allows developers to build custom designs without leaving their HTML.",
        "I am proficient in using Tailwind's mobile-first breakpoint system. I understand how to use unprefixed utilities for default styles and prefixed utilities for responsive styles.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "I have experience in creating responsive grids with Tailwind CSS.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Linguistikoh.com",
      description:
        "A based application that allows you to translate any international language form one language to another",
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
      image: carrent,
      source_code_link: "https://linguistikoh.vercel.app/",
    },
    {
      name: "AapkiDukaan",
      description:
        "Web application that enables users to searc for perfect products of thier needs.",
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
      image: jobit,
      source_code_link: "https://aaapkidukaan.vercel.app",
    },
    {
      name: "My portfolio",
      description:
        "A intresting portfolio for every developer that would absoulety help them tograb jobs .",
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
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };