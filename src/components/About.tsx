interface AboutProps {
  imgSrc: string
  imgAlt: string
  details: string
}

const aboutImgDimensions = [100, 100]

function About({ imgSrc, imgAlt, details }: AboutProps) {
  return (
    <li className="max-width">
      <div className="flex-row flex-centered-all">
        <img
          className ="dark-blue-bg padding-frame pixelated"
          src={`${imgSrc}`}
          width={`${aboutImgDimensions[0]}`}
          height={`${aboutImgDimensions[1]}`}
          alt={`${imgAlt}`} />
        <p className="dark-blue-bg padding-frame funnel-sans half-width"><b>{details}</b></p>
      </div>
    </li>
  )
}

export default About
