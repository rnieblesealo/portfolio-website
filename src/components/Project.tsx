interface ProjectProps {
  name: string
  link: string
  imgSrc: string
  desc: string
}

const projectImgDimensions = [100, 100]

function Project({ name, link, imgSrc, desc }: ProjectProps) {
  return (
    <li className="flex-centered-all flex-col">
      <a href={link} className="flex-centered-v flex-col project grid-item">
        <h3 className="project-heading flex-centered-all normal-body-text text-bold text-big example-color">{name}</h3>
        <img className="normal-body-text" src={imgSrc} width={`${projectImgDimensions[0]}`} height={`${projectImgDimensions[1]}`} alt={`${name} image/GIF`} />
        <p className="flex-centered-all project-desc normal-body-text">{desc}</p>
      </a>
    </li>
  )
}

export default Project
