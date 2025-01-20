interface AboutProps {
  imgSrc: string
  imgAlt: string
  details: string
}

const aboutImgDimensions = [100, 100]

function About({ imgSrc, imgAlt, details }: AboutProps) {
  return (
    <li>
      <div className="flex-row flex-centered-all">
        <img
          className ="image-frame normal-body-text pixelated"
          src={`${imgSrc}`}
          width={`${aboutImgDimensions[0]}`}
          height={`${aboutImgDimensions[1]}`}
          alt={`${imgAlt}`} />
        <p className="about-info normal-body-text bold-text">{details}</p>
      </div>
    </li>
  )
}

export default About
