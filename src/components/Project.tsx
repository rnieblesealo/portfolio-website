import Language from "./Language"

interface ProjectProps {
  name: string
  link: string
  imgSrc: string
  desc: string
  langs: string[] | undefined
  color: string | undefined
}

function Project({ name, link, imgSrc, desc, langs, color }: ProjectProps) {
  const langsList = langs?.map((lang) => (
    <Language lang={lang} />
  ))

  return (
    <li className="flex-centered-all flex-col">
      <a href={link} className="flex-centered-v flex-col project grid-item gapped">
        <h3 className={`project-heading flex-centered-all normal-body-text text-bold text-big bg-${color}`}>{name}</h3>
        <img className="project-img normal-body-text" src={imgSrc} alt={`${name} image/GIF`} />
        <p className="flex-centered-all project-desc normal-body-text semibold-text">{desc}</p>
        <ul className="flex-centered-all flex-row text-big gapped">
          {langsList}
        </ul>
      </a>
    </li>
  )
}

export default Project
