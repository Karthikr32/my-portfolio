import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaJava} from "react-icons/fa";
import {SiJquery, SiMui, SiSpring, SiSpringboot, SiSpringsecurity} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

const Items = [
  {
    id: 1,
    title: "Shop.in Application",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
      "|",
      <FaBootstrap color="purple" />,
      "|",
      <SiJquery color="darkcyan" />,
      "|",
      <VscJson />,
    ],
    img: "/Shopping.jpg",
    description:
      "The UI of the ShopIn website presents a clean, engaging online shopping experience. It offers a wide range of categories, including electronics, clothing (for men, women, and kids), appliances, and food, with a focus on showcasing deals, popular products, and special offers. Utilizes Bootstrap to ensure compatibility and a responsive layout across desktops, tablets and mobiles.  Fetched all products from a JSON file and organized them into various categories such as Electronics, Mobiles, Clothing, Home Appliances, Food, etc.  Supports adding, updating, or removing items from the cart, along with the option to continue shopping or proceed to checkout.",
    link1: "https://github.com/Karthikr32/ShopIn",
    link2: "https://karthikr32.github.io/ShopIn/ShopIn-main.html",
  },
  {
    id: 2,
    title: "Youtube Clone",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
      "|",
      <FaReact color="skyblue" />
    ],
    img: "/youtube.png",
    description:
      " YouTube clone project built using HTML, CSS, JS and React focuses on replicating the basic layout and features of YouTube’s interface. By making the clone ultra more responsive, you ensure that it adapts well to different screen sizes, such as desktops, tablets, and smartphones. project recreates the visual and interactive design of YouTube’s main interface using React functional components, organized component structure, modular CSS, and dummy data for rendering video content dynamically. Along with I used Iframe links in the thumbnail container when user clicks any of the thumbnail or blogs it will redirect to real youtube to play that video.",
    link1: "https://github.com/Karthikr32/my-youtube",
    link2: "https://my-youtube-six-henna.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Application",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
      "|",
      <FaReact color="skyblue" />,
    ],
    img: "/weather.png",
    description:
      "This application is a weather forecast web application built using ReactJS, designed to display current weather data for any city across the globe. The application integrates the OpenWeatherMap API to fetch real-time weather details and features a clean, user-friendly interface with responsive visuals and dynamic background transitions based on weather conditions. The project was built with a focus on practical front-end development skills such as API integration, state management, error handling, environment variable security, and conditional rendering.",
    link1: "https://github.com/Karthikr32/weather-app",
  },
  {
    id: 4,
    title: "Form Entry Application",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
    ],
    img: "/course-register.jpeg",
    description:
      "This Application is a web-based Enquiry Form System developed based on Besant Technologies, designed to collect and manage user enquiries for various training courses. Build using HTML5, CSS3 and JS, the form captures essential details from students. Upon submission, the form validates the required fields and dynamically displays the data in a structured HTML table below the form. Each row in the table includes “Edit” and “Delete” options. The Edit functionality allows the admin to modify the submitted data directly within the table by converting the text into editable input fields. Once the data is updated, the “Save” button reverts back to “Edit” and displays the updated content. The Delete button removes the respective row from the table entirely.",
    link1: "https://github.com/Karthikr32/BesantForm",
    link2: "https://karthikr32.github.io/BesantForm/",
  },
  {
    id: 5,
    title: "Rock Paper Scissor Game",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
    ],
    img: "/Gaming.jpg",
    description:
      "Rock-Paper-Scissors Game built using HTML, CSS, and JS, providing an interactive and fun way to play the classic game against the computer. The UI displays three buttons represents Rock, Paper, and Scissors, as an emoji image for visual appeal. User can play either by clicking the emoji buttons or pressing the corresponding keypress on Keyboard. Computer makes a random choice, and the result (win, lose, or tie) is displayed along with both players’ moves. The game keeps track of the user’s total wins, losses, and ties, updating the score dynamically. A unique feature of this project is the Auto Play mode, where the computer automatically makes random choices every 2 seconds, allowing seemless UX. Finally, the user can reset the score through reset button.",
    link1: "https://github.com/Karthikr32/Gaming",
    link2: "https://karthikr32.github.io/Gaming/Rock-Paper-Scissor.html",
  },
  {
    id: 6,
    title: "To-Do-List Application",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
    ],
    img: "/form_entry.webp",
    description:
      "To_Do_List application developed using HTML, CSS, and JS. The main purpose of this application is to allow users to manage their daily tasks efficiently by adding, marking, and deleting items from a list. Users can input a task in the text field and click the add button to include it in the task list. Each task appears as a list item with a close button (×) to delete it. Users can click on the task itself to toggle a check mark, indicating its completion status. I made this app also implements localStorage, allowing tasks to be saved and restored even after the browser is refreshed, ensuring persistence of data.",
    link1: "https://github.com/Karthikr32/Todo_list",
    link2: "https://karthikr32.github.io/Todo_list/",
  },
  {
    id: 7,
    title: "Course Registeration System",
    tech: [<FaHtml5 color="red" />, "|", <FaCss3Alt color="blue" />, "|", <FaJs color="yellow" />, "|", <FaJava color="darkcyan" />, "|",
      <SiSpring color="green" />, "|", <SiSpringboot color="green" />, "|", <GrMysql color="skyblue"/>],
    img: "/course-register.jpeg",
    description:
      "The Course Registration System is a full-stack web application built with Spring Boot and JavaScript that enables students to register for technical courses such as Java, Python, Front-end, Data Analyst, Web Development, etc. It features a RESTful backend with DTO-based input validation, integrated with a MySQL database, and a dynamic frontend that fetches and displays course/enrollment data in real time. Users can register, view, and delete student entries, with full synchronization to the backend. The system follows a clean architecture (Controller-Service-Repository) and is optimized for cross-origin interaction with a decoupled UI.",
    link1: "https://github.com/Karthikr32/students-crud-springboot",
  },
  {
    id: 8,
    title: "Browser Detecter Application",
    tech: [
      <FaHtml5 color="red" />,
      "|",
      <FaCss3Alt color="blue" />,
      "|",
      <FaJs color="yellow" />,
    ],
    img: "https://www.paperstreet.com/wp-content/uploads/2024/08/Free-Tool-Check-Your-Browser-Size-psfeat.jpg",
    description:
      "The Browser Detector is a web application built using vanilla JavaScript, HTML, and CSS that dynamically detects and displays detailed information about the user's browser and window environment. It identifies the browser name and version by parsing the user agent string, updates real-time window dimensions and screen position, and retrieves the user's geolocation with permission. The app also includes local storage functionality, allowing users to save and retrieve custom text data directly in their browser. Additionally, interactive buttons enable user prompts, alerts, and confirmation dialogs for an engaging experience. The project demonstrates practical use of core web APIs like navigator, localStorage, geolocation, and DOM manipulation to create a responsive and informative client-side tool.",
    link1: "https://github.com/Karthikr32/browser-detecter",
    link2: "https://karthikr32.github.io/browser-detecter/",
  },
  {
    id: 9,
    title: "Multi-Purpose To-Do Application",
    tech: [<FaHtml5 color="red" />, "|", <FaCss3Alt color="blue" />, "|", <FaJs color="yellow" />, "|", <SiJquery color="darkcyan" />],
    img: "/form_entry.webp",
    description:
      "This Advanced To-Do App is a feature-rich task management tool designed to help users organize their daily activities efficiently. Built with HTML, CSS, jQuery, and the SortableJS library, it allows users to add tasks with customizable categories (Work, Personal, Shopping), priority levels (High, Medium, Low), and due dates. The app’s interface includes a form for task input, filter buttons to view tasks by category or priority, and a dynamically updated task list. Users can mark tasks as complete, edit existing tasks, delete unwanted tasks, and reorder them via drag-and-drop functionality. All tasks are saved in the browser’s localStorage, ensuring persistence even after the page reloads. This structured, modular design promotes ease of use and efficient task management, making it suitable for both personal and professional organization.",
    link1: "https://github.com/Karthikr32/advanced-todo-app",
    link2: "https://karthikr32.github.io/advanced-todo-app/to-do-list.html",
  },
  {
    id: 10,
    title: "E-Commerce Application",
    tech: [<FaHtml5 color="red" />, "|", <FaCss3Alt color="blue" />, "|", <FaJs color="yellow" />, "|", <FaBootstrap color="purple" />, "|",
      <SiJquery color="darkcyan" />, "|", <FaJava color="darkcyan" />, "|", <SiSpring color="green" />, "|", <SiSpringboot color="green" />, "|",
      <SiSpringsecurity color="green" /> , "|", <GrMysql color="skyblue"/>],
    img: "/e-commerce.jpeg",
    description:
      "Shop.in is a full-fledged, responsive e-commerce web application developed using HTML, CSS (Bootstrap), JavaScript (vanilla) for the front-end and Spring Boot, MySQL, and JWT for the back-end. This project features a modular, user-friendly shopping interface with dynamic product listings across various categories including appliances, mobiles, electronics, foods, and clothes. The front-end includes intuitive navigation, a real-time search bar, an interactive Bootstrap carousel, and a responsive cart system with quantity controls. The back-end is powered by Spring Boot and follows the three-layer architecture (Controller, Service, Repository). It integrates Spring Security and JWT authentication to handle secure user registration and login. User data is validated using DTOs and Java Bean Validation, with clear error responses returned using BindingResult. All form inputs and interactions are handled securely, and token-based authentication is used to manage session integrity, with automatic JWT expiration validation.",
    link1: "https://github.com/Karthikr32/shop-in-application",
  },
];

const SingleItem = ({item}) => {

  const ref = useRef();

  // for Container-block feature!
  const { scrollYProgress } = useScroll({ target: ref });

  // for Container-block feature!
  const y = useTransform(scrollYProgress, [0, 1], [-200, 100]);

  // Project view container section
  return (
    <section>
      <div className="container">
        <div className="img-container" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="text-container" style={{ y }}>
          <h2>{item.title}</h2>
          <div className="teck-stack">
            <h5>Tech used: </h5>
            {item.tech.map((tech, index) => {
              return (
                <span key={index}>{tech}</span>
              )
            })}
          </div>
          <p>{item.description}</p>
          <div className="link-btns">
            {item.link1 && item.link2 ? (
              <>
                <button>
                  <a
                    href={item.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Repo
                  </a>
                </button>
                <button>
                  <a
                    href={item.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Demo
                  </a>
                </button>
              </>
            ) : (
              <button>
                <a href={item.link1} target="_blank" rel="noopener noreferrer">
                  See Repo
                </a>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  // for Progress bar feature!
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // for Progress bar feature!
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Progress bar section and mapping the project view container section inside it
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>

      {Items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
