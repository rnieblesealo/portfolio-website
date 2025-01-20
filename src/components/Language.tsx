interface LanguageProps {
  lang: string
}

function Language({ lang }: LanguageProps) {
  return (
    <li>
      <h2><i className={`devicon-${lang}-plain white-fg`} /></h2>
    </li>
  )
}

export default Language 
