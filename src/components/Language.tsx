import { useState } from "react"

interface LanguageProps {
  lang: string
  useFa?: boolean
}

function Language({ lang, useFa }: LanguageProps) {
  const usedIcon = useFa ? `fa-solid fa-${lang}` : `devicon-${lang}-plain`

  // Color on hover
  const [isHover, setIsHover] = useState(false)

  return (
    <li
      className="selectable select-grow"
      onMouseEnter={() => { setIsHover(true) }}
      onMouseLeave={() => { setIsHover(false) }}
    >
      <h2><i className={`color-transition ${usedIcon} ${isHover ? "colored" : ""}`} /></h2>
    </li>
  )
}

export default Language 
