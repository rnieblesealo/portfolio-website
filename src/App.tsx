import './App.css'
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
    imgSrc: "",
    bullets: [
      "Built iOS app from scratch",
      "Shipped it in only 4 months!"
    ]
  },
  {
    companyName: "KnightHacks",
    role: "Member",
    imgSrc: "",
    bullets: [
      "Taught iOS",
      "Lead fullstack project"
    ]
  }
]

const PROJECTS = [
  { name: "Bromodoro", link: "", imgSrc: "", desc: "Fullstack social pomodoro timer" },
  { name: "CHIP-8 Emulator", link: "", imgSrc: "", desc: "CHIP-8 emulator built in C++ w/SDL2" }
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
    />
  ))

  return (
    <>
      <header>
        <nav>
          <ul>
            <NavbarItem text="Home" url="/" />
            <NavbarItem text="About" url="/" />
            <NavbarItem text="Experience" url="/" />
            <NavbarItem text="Projects" url="/" />
          </ul>
        </nav>
      </header>
      <Profile />
      <ul>
        {langsList}
      </ul>
      <h1>About Me</h1>
      <ul>
        {aboutsList}
      </ul>
      <h1>Experience</h1>
      <ul>
        {experienceList}
      </ul>
      <h1>Projects</h1>
      <ul>
        {projectList}
      </ul >
      <footer>
        {/* TODO: Add heart using FontAwesome */}
      </footer>
    </>
  )
}

export default App
