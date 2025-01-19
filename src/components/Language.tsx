interface LanguageProps {
  lang: string
}

function Language({ lang }: LanguageProps) {
  return (
    <li>
      <i className={`devicon-${lang}-plain colored`} />
    </li>
  )
}

export default Language 
