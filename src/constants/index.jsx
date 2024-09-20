import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';

import ecommerce from '../assets/ecommerce.png';
import worldwise from '../assets/worldwise.png';
import pizzaProject from '../assets/pizzaProject.png';
import film from '../assets/film.png';
import todo from '../assets/todo.png';
import ratingProject from '../assets/ratingProject.png';
import wild from '../assets/wild.png';

export const LINKS = [{ id: '/', name: 'Home' }];

export const MARQUEE_TEXT =
  'React.js, javaScript, Css3, Html5, Tailwind Css, Bootstrap, Redux Toolkit, React Query, Framer Motion, ';

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'An e-commerce website that offers users a flexible browsing experience, consisting of various items for sale and a shopping cart where users can add any desired item. Users can review the cart before proceeding to payment. Additionally, users can search for specific items by name or sort items from cheapest to most expensive. Firebase authentication is utilized for user authentication.',
    imgSrc: ecommerce,
    githubLink: 'https://github.com/Saidelamy/e-commerce',
    liveLink: '',
    technologiesUsed:
      'Firebaase, React.js, Redux Toolkit, Tailwind Css, React Router, Vite',
  },
  {
    id: 2,
    title: 'GeoLocate App',
    description:
      'A travel website that allows users to add all the countries and cities they have visited, keeping a record of them and creating a personal library of their visits. Users can add and delete any city from this library. Additionally, users can add a shortcut for each visit, creating a unique atmosphere for each visit.',
    imgSrc: worldwise,
    githubLink: 'https://github.com/Saidelamy/worldwise/tree/main',
    liveLink: 'https://worldwise-lime.vercel.app/',
    technologiesUsed:
      'Json Server, React.js, React Datepicker, React Error Boundary, React Router, React Toastify, React Leaflet, Css Modulee, Vite',
  },
  {
    id: 3,
    title: 'Pizza Menu Website',
    description:
      'A simple website interface featuring a pizza menu where all types of pizzas are displayed. Users can select the pizza they want and choose the quantity. When the quantity runs out, it will be marked as "sold out." Once the user selects a pizza, it is added to the shopping cart, where they can delete or modify any pizza. Users can navigate through the process until they reach the payment stage.',
    imgSrc: pizzaProject,
    githubLink: 'https://github.com/Saidelamy/Fast-Pizza/tree/main',
    liveLink: 'https://fast-pizza-eight.vercel.app/',
    technologiesUsed:
      'React.js, Redux Toolkit, Tailwind Css, React Router, Reselect, Vite',
  },
  {
    id: 4,
    title: 'Movies Website',
    description:
      'A simple user interface displaying a collection of trendy movies currently available. Information such as the overall rating of the film, actors, genre, release year is shown. The same applies to trendy TV series, also showcasing some of the famous actors.',
    imgSrc: film,
    githubLink: 'https://github.com/Saidelamy/day3wa2tk/tree/main',
    liveLink: 'https://day3wa2tk.vercel.app/',
    technologiesUsed:
      'Axios, React.js, React Helmet, Bootstrep, React Router, React Detect Offline, Jwt-Decode',
  },
  {
    id: 5,
    title: 'Todo List',
    description:
      'A "To-Do List" that allows users to add and delete tasks they want to accomplish.',
    imgSrc: todo,
    githubLink: 'https://github.com/Saidelamy/travel-list/tree/main',
    liveLink: 'https://todo-travel-sand.vercel.app/',
    technologiesUsed: 'React Hot Toast, React.js',
  },
  {
    id: 6,
    title: 'Rating Movies Website',
    description:
      'A simple user interface that allows users to search for movies and TV shows they are interested in. Users can provide their own ratings for the film or series and compare it to the IMDb rating.',
    imgSrc: ratingProject,
    githubLink: 'https://github.com/Saidelamy/RatingMovie-app/tree/main',
    liveLink: 'https://rating-movie.vercel.app/',
    technologiesUsed: 'React.js, Local Storage, Hooks',
  },
  {
    id: 7,
    title: 'Reseptionist app',
    description:
      'A site that contains many advantages The site is used through the reception in a hotel where the site contains the display of all the information of the hotel in terms of rooms and people who stay in the hotel and also displays all the information about the people who made the reservation through the mobile and check in and check out for any existing reservation and also allows the worker to modify anything such as the number of beds in the room or the number of rooms and each worker has his own email.',
    imgSrc: wild,
    githubLink: 'https://github.com/Saidelamy/the-wild-oasis/tree/main',
    liveLink: 'https://thewild-oasis-virid.vercel.app/',
    technologiesUsed:
      'Supabase, Styled Componant, React.js, React Router, React Error Boundary, React Hook Form, React Host Toast, Recharts, Vite',
  },
];

export const ABOUT =
  'As a dedicated Frontend Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.';

// export const EXPERIENCES = [
//   {
//     company: "Google",
//     role: "Software Engineer",
//     year: "12/2023 - Present",
//     description:
//       "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
//   },
//   {
//     company: "Facebook",
//     role: "Frontend Developer",
//     year: "01/2021 - 11/2023",
//     description:
//       "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
//   },
// ];

export const laibrariesIcon = [
  {
    title: 'React.Js',
    style: '3191B1',
    icon: <FaReact fontSize={26} className="text-[#3191B1] hover:opacity-80" />,
  },
  {
    title: 'Redux Toolkit',
    style: '8D55D5',
    icon: <SiRedux fontSize={26} className="text-[#8D55D5] hover:opacity-80" />,
  },
  {
    title: 'JavaScript',
    style: 'F5C401',
    icon: (
      <IoLogoJavascript
        fontSize={26}
        className="text-[#F5C401] hover:opacity-80"
      />
    ),
  },
  {
    title: 'Bootstrap',
    style: '7317D6',
    icon: (
      <FaBootstrap fontSize={26} className="text-[#7317D6] hover:opacity-80" />
    ),
  },
  {
    title: 'Tailwind Css',
    style: '38BDF8',
    icon: (
      <RiTailwindCssFill
        fontSize={26}
        className="text-[#38BDF8] hover:opacity-80"
      />
    ),
  },
  {
    title: 'HTML5',
    style: 'EE5420',
    icon: <FaHtml5 fontSize={26} className="text-[#EE5420] hover:opacity-80" />,
  },
  {
    title: 'CSS3',
    style: '2653E5',
    icon: <FaCss3 fontSize={26} className="text-[#28A3D6] hover:opacity-80" />,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://x.com/callMeSaid_',
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: 'https://github.com/Saidelamy?tab=repositories',
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: 'https://www.linkedin.com/in/said-magdy-167874231/',
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: 'I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.',
  email: 'saidmagdypro@gmail.com',
  phone1: '+20 106 035 0330',
  phone2: '+20 155 328 6274',
};
