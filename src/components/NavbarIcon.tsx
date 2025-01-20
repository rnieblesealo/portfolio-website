interface NavbarIconProps {
  icon: string
  url: string
}

function NavbarIcon({ icon, url }: NavbarIconProps) {
  return (
    <a href={url} className="flex-centered-all max-width max-height walled-list-item">
      <i className={`devicon-${icon}-plain normal-body-text flex-centered-all`} />
    </a>
  )
}

export default NavbarIcon
