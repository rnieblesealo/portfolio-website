interface LanguageProps {
  lang: string
}

function Language({ lang }: LanguageProps) {
  return (
    <li>
      <i className={`devicon-${lang}-plain normal-body-text`} />
    </li>
  )
}

export default Language 
