import './App.css'
import Clouds from "./components/Clouds.tsx"
import NavbarItem from "./components/NavbarItem.tsx"
import Language from "./components/Language.tsx"
import About from "./components/About.tsx"
import Experience from "./components/Experience.tsx"
import Profile from "./components/Profile.tsx"
import Project from "./components/Project.tsx"

const LANGUAGES = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "python",
  "java",
  "swift",
  "lua",
  "c",
  "cplusplus",
  "csharp",
  "tex",
]

const ABOUT = [
  { imgSrc: "", imgAlt: "Illustration", details: "This is something about me!" },
  { imgSrc: "", imgAlt: "Another illustration", details: "This is something else about me!" }
]


const EXPERIENCES = [
  {
    companyName: "HYEL, Inc.",
    role: "iOS Software Engineer",
    imgSrc: "./images/hyel.jpg",
    bullets: [
      "Built iOS app from scratch",
      "Shipped it in only 4 months!"
    ]
  },
  {
    companyName: "KnightHacks",
    role: "Member",
    imgSrc: "./images/knighthacks.jpg",
    bullets: [
      "Taught iOS",
      "Lead fullstack project"
    ]
  }
]

const PROJECTS = [
  { name: "Dower Tefense", link: "https://github.com/rnieblesealo/cpp-sdl-td", imgSrc: "./images/dower-tefense.gif", desc: "Point-and-click tower defense game built in C++ using SDL2 for graphics.", langs: ["cplusplus", "sdl", "cmake"], color: "red" },
  { name: "CHIP-8 Emulator", link: "", imgSrc: "./images/chip8.gif", desc: "CHIP-8 emulator built in C++ w/SDL2.", langs: ["cplusplus", "sdl", "cmake"], color: "green"},
  { name: "Microtransistor", link: "", imgSrc: "./images/microtransistor.gif", desc: "Single-player first person shooter built in Unity.", langs: ["unity", "csharp", "blender"], color: "yellow"},
  { name: "PRAPP", link: "https://www.youtube.com/watch?v=YZIgejMaxrQ", imgSrc: "./images/prapp.png", desc: "Gamified SAT prep app built in Unity.", langs: ["unity", "csharp", "blender"], color: "blue"},
  // { name: "The Spyder", link: "https://github.com/hyungwlee/hyel-spyder", imgSrc: "./images/thespyder.gif", desc: "Dodge oncoming traffic as you escape a hungry spider! Survival is futile...", langs: ["swift", "spritekit"] }
  // TODO: Fix image/gif scaling, add colors!
]

function App() {
  const langsList = LANGUAGES?.map((lang) => (
    <Language lang={lang} />
  ))

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
      imgSrc={exp.imgSrc}
      bullets={exp.bullets}
    />
  ))

  const projectList = PROJECTS?.map((proj) => (
    <Project
      name={proj.name}
      link={proj.link}
      imgSrc={proj.imgSrc}
      desc={proj.desc}
      langs={proj.langs}
      color={proj.color}
    />
  ))

  return (
    <div id="glob-parent" className="flex-centered-v flex-col">
      <Clouds />
      <nav className="navbar">
        <ul className="flex-centered-all max-width max-height navbar-list">
          <NavbarItem text="Home" url="/" />
          <NavbarItem text="About" url="/" />
          <NavbarItem text="Experience" url="/" />
          <NavbarItem text="Projects" url="/" />
        </ul>
      </nav>
      <Profile />
      <ul className="language-list flex-centered-all flex-row gapped text-big">
        {langsList}
      </ul>
      <h1>About Me</h1>
      <ul>
        {aboutsList}
      </ul>
      <h1>Experience</h1>
      <ul className="flex-col gapped">
        {experienceList}
      </ul>
      <h1>Projects</h1>
      <ul className="grid gapped">
        {projectList}
      </ul >
      <footer>
        {/* TODO: Add heart using FontAwesome */}
      </footer>
    </div>
  )
}

export default App
