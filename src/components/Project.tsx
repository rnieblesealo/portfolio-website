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
      <a href={link} className="
        flex-centered-v 
        flex-col 
        max-width 
        max-height
        include-padding 
        gapped
        dark-blue-bg
        padding-frame 
        ">
        <h3 className={`project-heading flex-centered-all funnel-sans text-bold text-big max-width ${color}-bg`}><b>{name}</b></h3>
        <img className="funnel-sans square max-width crop-to-fit" src={imgSrc} alt={`${name} image/GIF`} />
        <p className="flex-centered-all project-desc funnel-sans semibold-text">{desc}</p>
        <ul className="flex-centered-all flex-row text-big gapped">
          {langsList}
        </ul>
      </a>
    </li>
  )
}

export default Project
