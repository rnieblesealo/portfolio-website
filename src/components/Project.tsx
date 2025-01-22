import Language from "./Language"

interface ProjectProps {
  name: string
  link: string
  imgSrc: string
  desc: string
  langs?: string[]
  color?: string
}

function Project({ name, link, imgSrc, desc, langs, color }: ProjectProps) {
  const langsList = langs?.map((lang) => (
    <Language lang={lang} />
  ))

  return (
    <li className="flex-centered-all flex-col">
      <a href={link} target="_blank" className="
        border-hover
        flex-centered-v 
        flex-col 
        max-width 
        max-height
        include-padding 
        gapped
        dark-blue-bg
        padding-frame 
        selectable
        select-grow-less
        ">
        <h3 className={`project-heading flex-centered-all funnel-sans text-bold max-width ${color}-bg center-text include-padding`}><b>{name}</b></h3>
        <img className="funnel-sans square max-width crop-to-fit" src={imgSrc} alt={`${name} image/GIF`} />
        <p className="flex-centered-all project-desc funnel-sans center-text">{desc}</p>
        <ul className="flex-centered-all flex-row text-big gapped">
          {langsList}
        </ul>
      </a>
    </li>
  )
}

export default Project
