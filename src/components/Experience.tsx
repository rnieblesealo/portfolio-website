interface ExperienceProps {
  companyName: string
  role: string
  imgSrc: string
  bullets: string[]
}

const expImgDimensions = [100, 100]

function Experience({ companyName, role, imgSrc, bullets }: ExperienceProps) {
  const bulletPoints = bullets?.map((bullet) => (
    <li><span>{bullet}</span></li>
  ))

  return (
    <li>
      <h3>{companyName}</h3>
      <h4>{role}</h4>
      <img src={imgSrc} width={`${expImgDimensions[0]}`} height={`${expImgDimensions[1]}`} alt={`${companyName} logo`} />
      <p>Some of what I did while I was there</p>
      <ul>
        {bulletPoints}
      </ul>
    </li>
  )
}

export default Experience
