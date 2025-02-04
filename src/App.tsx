import './App.css'
import Clouds from "./components/Clouds.tsx"
import NavbarItem from "./components/NavbarItem.tsx"
import NavbarIcon from "./components/NavbarIcon.tsx"
import About from "./components/About.tsx"
import Experience from "./components/Experience.tsx"
import Profile from "./components/Profile.tsx"
import Project from "./components/Project.tsx"


const ABOUT = [
  { imgSrc: "./images/ucf.png", imgAlt: "Knightro", details: "I attend UCF for a bachelor's in Computer Science and a minor in Math!" },
  { imgSrc: "./images/colombia.png", imgAlt: "Colombia art", details: "I'm a proud permanent resident from Colombia! I speak both Spanish and English." },
  { imgSrc: "./images/running.png", imgAlt: "Man running", details: "I love running! Recently, I did my first half-marathon." },
  { imgSrc: "./images/guitar.png", imgAlt: "Guitar", details: "I'm a musician! While at UCF, I've also played guitar for a couple local bands." },
  { imgSrc: "./images/heathers.png", imgAlt: "Heathers", details: "My favorite movie is Heathers." },
]


const EXPERIENCES = [
  {
    companyName: "HYEL, Inc.",
    role: "Software Engineering Intern",
    details: "At HYEL, I had the opportunity to create a complete, production-ready software product, from the design phase all the way to shipping. Check out \"The Spyder\" in the HYEL app/my projects below!",
    imgSrc: "./images/hyel.jpg",
    bullets: [
      "Designed a complete iOS app using Figma",
      "Implemented it using Xcode, UIKit, Swift and SpriteKit.",
      "Ensured a consistent 60 FPS and reduced render load by 30% for its production version.",
    ],
    from: "Sep. 2024",
    to: "Dec. 2024",
    bulletsText: "What I Did"
  },
  {
    companyName: "KnightHacks",
    role: "Workshop Instructor",
    details: "I'm soon going to host my own KnightHacks workshop, where I'll be introducing curious minds to the world of mobile dev with Swift using a beginner-friendly game project!",
    imgSrc: "./images/knighthacks.jpg",
    bullets: [
      "The Xcode IDE and its file explorer, inspector, and debugger.",
      "The Swift language and its special features (optionals, unwrapping, computed properties, etc.)",
      "iOS app architecture (ViewControllers, SceneControllers, Windows, etc.)"
    ],
    from: "Planning Jan. 2025",
    to: "Teaching February 2025!",
    bulletsText: "What I'll Teach"
  },
  {
    companyName: "KnightHacks",
    role: "Full-Stack Project Lead",
    details: "As a team of 5, we'll be designing and implementing Bromodoro, a full-stack app designed to make productivity more social and fun using the genius Pomodoro Technique.",
    imgSrc: "./images/knighthacks.jpg",
    bullets: [
      "Developing a modern, responsive (and fun!) frontend using Vite + React.",
      "Leveraging Supabase and its API for our database and deployment needs.",
      "Creating a fun app that'll hopefully get you to do your homework!",
    ],
    from: "Jan. 2025",
    to: "April 2025",
    bulletsText: "Our Activities"
  },
]

const PROJECTS = [
  { name: "Bromodoro", link: "https://github.com/Frankelly-Guzman/Bromodoro", imgSrc: "./images/bromodoro-img.png", desc: "Social, gamified productivity with the Pomodoro Technique!", langs: ["typescript", "react", "vite", "tailwindcss", "docker", "supabase", "git", "postgresql"] },
  { name: "The Spyder", link: "https://github.com/hyungwlee/hyel-spyder", imgSrc: "./images/compressed-gifs/spyder.gif", desc: "Dodge oncoming traffic as you escape a hungry spider!", langs: ["swift", "xcode", "figma"] },
  { name: "CHIP-8 Emulator", link: "https://github.com/rnieblesealo/cpp-chip8-emu", imgSrc: "./images/compressed-gifs/chip8.gif", desc: "CHIP-8 emulator built in C++ w/SDL2.", langs: ["cplusplus", "sdl", "cmake"] },
  { name: "Microtransistor", link: "https://www.instagram.com/microtransistor/", imgSrc: "./images/compressed-gifs/microtransistor.gif", desc: "Single-player first person shooter built in Unity.", langs: ["unity", "csharp"] },
  { name: "Kanjo.AI", link: "https://github.com/rnieblesealo/kanjoai", imgSrc: "./images/compressed-gifs/kanjo-logo.gif", desc: "Custom emotion detection machine learning model!", langs: ["python", "pytorch"] },
  { name: "Dower Tefense", link: "https://github.com/rnieblesealo/cpp-sdl-td", imgSrc: "./images/compressed-gifs/dower.gif", desc: "Point-and-click tower defense game built in C++ using SDL2 for graphics.", langs: ["cplusplus", "sdl", "cmake"] },
  { name: "Lucina", link: "https://github.com/ryanengphoto/lucina", imgSrc: "./images/compressed-gifs/lucina.gif", desc: "First-person survival horror game built with Unity!", langs: ["unity", "csharp"] },
  { name: "mysh", link: "https://github.com/rnieblesealo/c-mysh", imgSrc: "./images/compressed-gifs/mysh.gif", desc: "UNIX shell built in C.", langs: ["c", "linux", "make"] },
  { name: "Skip List", link: "https://github.com/rnieblesealo/java-skiplist", imgSrc: "./images/skiplist.png", desc: "Skip list data structure implementation in Java.", langs: ["java"] },
  { name: "PRAPP", link: "https://www.youtube.com/watch?v=YZIgejMaxrQ", imgSrc: "./images/prapp.png", desc: "Gamified SAT prep built with Unity. Winner of the 2022 Congressional App Challenge.", langs: ["unity", "csharp", "blender"] },
]

function App() {
  const aboutsList = ABOUT?.map((about) => (
    <About
      imgSrc={about.imgSrc}
      imgAlt={about.imgAlt}
      details={about.details}
    />
  ))

  const experienceList = EXPERIENCES?.map((exp) => (
    <Experience
      companyName={exp.companyName}
      role={exp.role}
      details={exp.details}
      imgSrc={exp.imgSrc}
      bullets={exp.bullets}
      from={exp.from}
      to={exp.to}
      bulletsText={exp.bulletsText}
    />
  ))

  const colors = [
    "#ed3b3b",
    "#ff9c33",
    "#32c75c",
    "#31a379",
    "#198ae1",
    "#743bed",
    "#ae59e3",
    "#c43b5d",
    "#171717",
    "#171717"
  ]

  const projectList = PROJECTS?.map((proj, index) => (
    <Project
      name={proj.name}
      link={proj.link}
      imgSrc={proj.imgSrc}
      desc={proj.desc}
      langs={proj.langs}
      color={colors[index]}
    />
  ))

  return (
    <>
      <Clouds />
      <nav id="navbar" className="dark-blue-bg max-width">
        <ul className="flex-centered-all max-width max-height walled-list">
          <NavbarItem text="Home" shortText="HOME" url="#home" />
          <NavbarItem text="About" shortText="ABT" url="#about" />
          <NavbarItem text="Experience" url="#experience" />
          <NavbarItem text="Projects" shortText="PROJ" url="#projects" />
          <NavbarIcon icon="file" url="https://drive.google.com/file/d/16Tr9ySJrI1fEz8drh2w6zxu6ADSH9CbD/view?usp=sharing" useFa={true} />
          <NavbarIcon icon="github" url="https://github.com/rnieblesealo" />
          <NavbarIcon icon="linkedin" url="https://www.linkedin.com/in/rafael-niebles/" />
        </ul>
      </nav>
      <div id="content" className="max-width flex-centered-v flex-col gapped-more">
        <div id="home">
          <Profile />
        </div>
        <h1 id="about">About Me</h1>
        <ul id="about-list" className="flex-centered-all flex-col gapped-more">
          {aboutsList}
        </ul>
        <h1 id="experience">Experience</h1>
        <ul className="flex-centered-all flex-col gapped-more">
          {experienceList}
        </ul>
        <h1 id="projects">Projects</h1>
        <ul className="grid2x2 gapped min-content-width min-content-height">
          {projectList}
        </ul >
      </div>
    </>
  )
}

export default App
