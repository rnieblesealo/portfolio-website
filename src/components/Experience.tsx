interface ExperienceProps {
  companyName: string
  role: string
  details: string
  imgSrc: string
  bullets: string[]
}

const expImgDimensions = [80, 80]

function Experience({ companyName, role, details, imgSrc, bullets }: ExperienceProps) {
  const bulletPoints = bullets?.map((bullet) => (
    <li className="bulleted-list-item">
      <span className="normal-body-text">{bullet}</span>
    </li>
  ))

  return (
    <li className="experience">
      <div className="flex-row gapped-more">
        <img className="normal-body-text" src={imgSrc} width={`${expImgDimensions[0]}`} height={`${expImgDimensions[1]}`} alt={`${companyName} logo`} />
        <div className="experience-content flex-col gapped">
          <h3 className="normal-body-text bold-text text-big">{companyName}</h3>
          <h4 className="normal-body-text semibold-text text-medium">{role}</h4>
          <p className="normal-body-text">{details}</p>
          <ul className="bulleted-list">
            {bulletPoints}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Experience
