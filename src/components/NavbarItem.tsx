interface NavbarItemProps {
  text: string
  url: string
}

function NavbarItem({ text, url }: NavbarItemProps) {
  return (
    <li className="flex-centered-all navbar-item pixel-body-text">
      <a href={url}>{text}</a>
    </li>
  )
}

export default NavbarItem
