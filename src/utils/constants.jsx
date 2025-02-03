import { FaHtml5,FaJs,FaReact ,FaLinkedin,FaGithubSquare} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import youtubelogo from "../assets/youtube logo.jpeg"

export const aboutSvg = "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg"
export const coder = "<Coder>"
export const avatar = "https://img.freepik.com/premium-photo/cute-boy-study-with-laptop-cartoon-icon-illustration-education-technology-icon-concept-isolated-flat-cartoon-style_776674-1052731.jpg"

export const links = [
    {  href: "#home", text: "Home" },
    {  href: "#skills", text: "Skills" },
    {  href: "#about", text: "About" },
    {  href: "#portfolio", text: "Projects" },
    
  ]

  export const skills = [
    {
      title: "HTML&CSS",
      icon: <FaHtml5 className='h-16 w-16 text-black' />,
      text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    },
    {
       title: "Javascript",
      icon: <FaJs className='h-16 w-16 text-black' />,
      text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    },
    {
      title: "React",
      icon: <FaReact className='h-16 w-16 text-black' />,
      text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    },
  ]
  export const projects = [
    {
      
      img: "https://d33wubrfki0l68.cloudfront.net/65e2d852459a380008f6bbde/screenshot_2024-03-02-07-43-29-0000.webp",
      url: "https://netflix-clone-9354.web.app/",
      github: "https://github.com/Salman9354/netflix-clone",
      title: "Netflix",
      text: "This is a React app, which is a clone of Netflix.It'll show the info. about movies. It supports multi-languages (English, Hindi & Spanish).It has a form where validation and authentication required for user. Plus there's a search bar section, which is used to search any kind of movies details you want to know about.",
    }, 
    {
     
      img: youtubelogo,
      url: "https://clone-7e2c4.web.app/",
      github: "https://github.com/Salman9354/youtube-clone",
      title: "Youtube ",
      text: "This is a React app, which uses youtube API to fetch videos. We can use the search bar to search the videos as per our choice. React query is implemented in the app, to cache the search results for a limited amount of time to reduce API calls.There are few suggestion buttons which is mentioned as topic wise to fetch the videos on similar topic"
    }
  
  ]

export const footerData = [ 

  { href:"https://www.linkedin.com/in/salman-ali-256920256",
  title:"Linkdin",
  icon: <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-white duration-300' />,
},
{
  href:"https://github.com/Salman9354",
  title:"Github",
  icon:<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-white duration-300'/>,
},
{
  href:"alisalman93541@gmail.com",
  title:"Gmail",
  icon: <SiGmail className='h-8 w-8 text-slate-500 hover:text-white duration-300' />,
} ,

]