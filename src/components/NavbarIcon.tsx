interface NavbarIconProps {
  icon: string
  url: string
  useFa?: boolean
}

function NavbarIcon({ icon, url, useFa }: NavbarIconProps) {
  const usedIcon = useFa ?
    `fa-solid fa-${icon}` :
    `devicon-${icon}-plain normal-body-text center-text`

  return (
    <li className="flex-centered-all half-width max-height tiny5 walled-list-item selectable select-grow-text select-yellow">
      <a href={url} className="flex-centered-all max-width max-height select-yellow" target="_blank">
        <i className={usedIcon} />
      </a>
    </li>
  )
}

export default NavbarIcon
