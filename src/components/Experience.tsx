interface TimeLabelProps {
  from?: string 
  to?: string
}

function TimeLabel({ from, to }: TimeLabelProps) {
  const usedTo = to ? to : "Now!"

  return (
    <>
      <p className="funnel-sans center-text max-width">{`${from} - ${usedTo}`}</p>
    </>
  )
}

interface ExperienceProps {
  companyName: string
  role: string
  details?: string
  imgSrc: string
  bullets?: string[]
  from?: string
  to?: string
  bulletsText?: string
}

const expImgDimensions = [80, 80]

function Experience({ companyName, role, details, imgSrc, bullets, bulletsText, from, to }: ExperienceProps) {
  const bulletPoints = bullets?.map((bullet) => (
    <li className="bulleted-list-item">
      <span className="funnel-sans">{bullet}</span>
    </li>
  ))

  const usedBulletsText = bulletsText ? bulletsText : "Responsibilities"

  return (
    <li className="experience-card flex-centered-all min-content-height half-width">
      <div className="flex-row gapped-more dark-blue-bg padding-frame">
        <div className="flex-col flex-centered-v gapped-more">
          <img src={imgSrc} width={`${expImgDimensions[0]}`} height={`${expImgDimensions[1]}`} alt={`${companyName} logo`} />
          <TimeLabel from={from} to={to} />
        </div>
        <div className="flex-col gapped">
          <h2 className="funnel-sans">{companyName}</h2>
          <h3 className="funnel-sans">{role}</h3>
          <p className="funnel-sans">{details}</p>
          <h3 className="funnel-sans">{usedBulletsText}:</h3>
          <ul className="bulleted-list">
            {bulletPoints}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Experience
