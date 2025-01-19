interface ExperienceProps {
  companyName: string
  role: string
  imgSrc: string
  bullets: string[]
}

const expImgDimensions = [100, 100]

function Experience({ companyName, role, imgSrc, bullets }: ExperienceProps) {
  const bulletPoints = bullets?.map((bullet) => (
    <li className="bulleted-list-item">
      <span className="normal-body-text">{bullet}</span>
    </li>
  ))

  return (
    <li className="experience-info flex-row">
      <img className="normal-body-text" src={imgSrc} width={`${expImgDimensions[0]}`} height={`${expImgDimensions[1]}`} alt={`${companyName} logo`} />
      <div className="flex-col gapped">
        <h3 className="normal-body-text bold-text">{companyName}</h3>
        <h4 className="normal-body-text semibold-text">{role}</h4>
        <p className="normal-body-text">Some of what I did while I was there</p>
        <ul className="bulleted-list">
          {bulletPoints}
        </ul>
      </div>
    </li>
  )
}

export default Experience
