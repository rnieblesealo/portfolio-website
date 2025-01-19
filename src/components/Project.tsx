interface ProjectProps {
  name: string
  link: string
  imgSrc: string
  desc: string
}

const projectImgDimensions = [100, 100]

function Project({ name, link, imgSrc, desc }: ProjectProps) {
  return (
    <li>
      <a href={link}>
        <h3>{name}</h3>
        <img src={imgSrc} width={`${projectImgDimensions[0]}`} height={`${projectImgDimensions[1]}`} alt={`${name} image/GIF`} />
        <p>{desc}</p>
      </a>
    </li>
  )
}

export default Project
