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
      <span className="funnel-sans">{bullet}</span>
    </li>
  ))

  return (
    <li className="flex-centered-all max-width">
      <div className="flex-row gapped-more experience">
        <img className="funnel-sans" src={imgSrc} width={`${expImgDimensions[0]}`} height={`${expImgDimensions[1]}`} alt={`${companyName} logo`} />
        <div className="flex-col gapped max-width">
          <h2 className="funnel-sans">{companyName}</h2>
          <h3 className="funnel-sans">{role}</h3>
          <p className="funnel-sans">{details}</p>
          <ul className="bulleted-list">
            {bulletPoints}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Experience
