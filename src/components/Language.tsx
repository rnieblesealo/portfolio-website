interface LanguageProps {
  lang: string
  useFa?: boolean
}

function Language({ lang, useFa }: LanguageProps) {
  const usedIcon = useFa ? `fa-solid fa-${lang}` : `devicon-${lang}-plain`

  return (
    <li className="selectable select-grow">
      <h2><i className={usedIcon}/></h2>
    </li>
  )
}

export default Language 
