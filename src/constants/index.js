import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    medium,
    reactnative,
    reactjs,
    tailwind,
    nodejs,
    artkit,
    superex,
    enigma,
    webapp,
    foodapp,
    expense,
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
      title: "Freencelancer",
      icon: web,
    },
    {
      title: "Reactjs Developer",
      icon: mobile,
    },
    {
      title: " Technical writer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Medium",
      icon: medium,
    },
    {
      name: "ReactNative",
      icon: reactnative,
    },
  
   
  ];
  
  const experiences = [
    {
      title: "Content Writer",
      company_name: "Artkit",
      icon: artkit,
      iconBg: "#383E56",
      date: "March 2021 - August 2021",
      points: [
        "Organize and maintain a library of technical documentation for easy access and reference.",
        "Stay up-to-date on industry trends and technologies to ensure that technical documentation is current and relevant",
        "Participate in product development and testing to ensure technical documentation accurately reflects the product or service being described.",
        "Develop user guides, instruction manuals, release notes, and other technical documentation to support end-users.",
        "Managing Medium account and creating contents for Twitter and Medium and other Media"

      ],
    },
    {
      title: "Blockchain Content Writer",
      company_name: "SuperEx NG DAO",
      icon: superex,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Conducting research and gathering information to support technical writing projects.",
        "Writing technical content that is clear, concise, and easy to understand, while maintaining accuracy and technical correctness.",
        "Editing and proofreading technical documents for accuracy, consistency, and style.",
        "Communicating complex technical concepts and ideas to non-technical audiences.",
        "Managing Medium account and creating contents for Twitter and Medium and other Media"
      ],
    },
    {
      title: "FrontEnd Dev",
      company_name: "ENG ENT",
      icon: enigma,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Develops and maintain Web applications using React.js and related technologies",
        "Create top-notch products, and collaborating with cross-functional teams of designers, product managers",
        "Practicing responsive design and ensuring it is compatible with all browsers.",
        "Create contents for web pages and reseach on good and beautiful templates .",
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
      name: "Food Ordering App",
      description:
        "A simple web based app where you can place orders on your favorite foods.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: foodapp,
      source_code_link: "https://food-app-pi-jade.vercel.app/",
    },
    {
      name: "Expenses Tracker",
      description:
        "Web application that enables users to track and manage their expenses, with a good data chat patterns.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javacript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://expense-tracker-app-green.vercel.app/",
    },
    {
      name: "Web App",
      description:
        "A React js responsive web app for young  vibrant christains ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: webapp,
      source_code_link: "https://web-app-sigma-peach.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };