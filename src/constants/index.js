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
adverthub,
    aisum,
    expense,
    threejs,
    craig,
    misturah,
    perry,
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
      title: "Freelancer",
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
        "I worked with him for a while and truthfully he's someone that is very reliable, delivers good result without stress.",
      name: "Sir Craig",
      designation: "EX COO",
      company: "ArtKit",
      image: craig,
    },
    {
      testimonial:
        "I've never met someone who truly cares about my business' success like Enigma does.",
      name: "Perry",
      designation: "CEO",
      company: "PerryLux Scent",
      image: perry,
    },
    {
      testimonial:
        "Enigma is someone that will go extra miles and do the sacrifice just to make sure you get even much more than you expected ",
      name: "Misturah",
      designation: "CEO",
      company: "Smile Apparel",
      image: misturah,
    },
  ];
  
  const projects = [
    {
      name: "AI Article Summarizer App",
      description:
        "A simple web based app that uses OpenAI GPT-4 technology to summazrizer complex articles .",
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
      image: aisum,
      source_code_link: "https://enigmaaisummarizer.vercel.app/",
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
      name: "AdvertHUB",
      description:
        "Advertise on the go, buy pixels and advertise your business with this cool web App ",
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
      image: adverthub,
      source_code_link: "https://advertshub.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };