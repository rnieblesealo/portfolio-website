import './App.css'
import Clouds from "./components/Clouds.tsx"
import NavbarItem from "./components/NavbarItem.tsx"
import NavbarIcon from "./components/NavbarIcon.tsx"
import NavbarIconGroup from "./components/NavbarIconGroup.tsx"
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
  { imgSrc: "./images/ucf.png", imgAlt: "Knightro", details: "I attend UCF for a bachelor's in Computer Science and a minor in Math!" },
  { imgSrc: "./images/colombia.png", imgAlt: "Colombia art", details: "I'm a proud permanent resident from Colombia! I speak both Spanish and English." },
  { imgSrc: "./images/running.png", imgAlt: "Man running", details: "I love running! Recently, I did my first half-marathon." },
  { imgSrc: "./images/guitar.png", imgAlt: "Guitar", details: "I'm a musician! While at UCF, I've also played guitar for a couple local bands." },
  { imgSrc: "./images/heathers.png", imgAlt: "Heathers", details: "My favorite movie is Heathers." },
]


const EXPERIENCES = [
  {
    companyName: "KnightHacks",
    role: "Workshop Instructor",
    details: "I'm currently an iOS development workshop teacher for KnightHacks, where I introduce curious students to the world of mobile app dev. through a beginner-friendly, fun game project. Below are some of the topics I taught!",
    imgSrc: "./images/knighthacks.jpg",
    bullets: [
      "Using XCode and its file explorer, inspector, and debugger.",
      "The Swift language and its special features (optionals, unwrapping, computed properties, etc.)",
      "Common iOS API's and frameworks, including SpriteKit, UIKit, and AVFoundation.",
      "Multithreading using DispatchQueue",
      "iOS app architecture (ViewControllers, SceneControllers, Windows, etc.)"
    ]
  },
  {
    companyName: "KnightHacks",
    role: "Full-Stack Project Lead",
    imgSrc: "./images/knighthacks.jpg",
    bullets: [
      "Taught iOS",
      "Lead fullstack project"
    ]
  },
  {
    companyName: "HYEL, Inc.",
    role: "iOS Software Engineer",
    imgSrc: "./images/hyel.jpg",
    bullets: [
      "Built iOS app from scratch",
      "Shipped it in only 4 months!"
    ]
  },
]

const PROJECTS = [
  { name: "Dower Tefense", link: "https://github.com/rnieblesealo/cpp-sdl-td", imgSrc: "./images/dower-tefense.gif", desc: "Point-and-click tower defense game built in C++ using SDL2 for graphics.", langs: ["cplusplus", "sdl", "cmake"], color: "red" },
  { name: "CHIP-8 Emulator", link: "", imgSrc: "./images/chip8.gif", desc: "CHIP-8 emulator built in C++ w/SDL2.", langs: ["cplusplus", "sdl", "cmake"], color: "green" },
  { name: "Microtransistor", link: "", imgSrc: "./images/microtransistor.gif", desc: "Single-player first person shooter built in Unity.", langs: ["unity", "csharp", "blender"], color: "yellow" },
  { name: "PRAPP", link: "https://www.youtube.com/watch?v=YZIgejMaxrQ", imgSrc: "./images/prapp.png", desc: "Gamified SAT prep app built in Unity.", langs: ["unity", "csharp", "blender"], color: "blue" },
  // { name: "The Spyder", link: "https://github.com/hyungwlee/hyel-spyder", imgSrc: "./images/thespyder.gif", desc: "Dodge oncoming traffic as you escape a hungry spider! Survival is futile...", langs: ["swift", "spritekit"] }
  // TODO: Fix image/gif scaling, add colors!
]

const NAV_ICONS = [
  { icon: "github", url: "/" },
  { icon: "linkedin", url: "/" },
  { icon: "readthedocs", url: "/" },
]

function App() {
  const navIcons = NAV_ICONS?.map((nav) => (
    <NavbarIcon
      icon={nav.icon}
      url={nav.url}
    />
  ))

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
      details={exp.details}
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
    <>
      <Clouds />
      <nav id="navbar" className="dark-blue-bg">
        <ul className="flex-centered-all max-width max-height walled-list">
          <NavbarItem text="Home" url="/" />
          <NavbarItem text="About" url="/" />
          <NavbarItem text="Experience" url="/" />
          <NavbarItem text="Projects" url="/" />
          <NavbarIconGroup icons={navIcons} />
        </ul>
      </nav>
      <div id="content" className="half-width flex-centered-v flex-col gapped-more">
        <Profile />
        <ul className="padding-frame dark-blue-bg flex-centered-v flex-row gapped">
          {langsList}
        </ul>
        <h1>About Me</h1>
        <ul id="about-list" className="flex-centered-all flex-col gapped">
          {aboutsList}
        </ul>
        <h1>Experience</h1>
        <ul className="flex-centered-all flex-col gapped-more">
          {experienceList}
        </ul>
        <h1>Projects</h1>
        <ul className="grid2x2 gapped">
          {projectList}
        </ul >
        <footer>
          {/* TODO: Add heart using FontAwesome */}
        </footer>
      </div>
    </>
  )
}

export default App
