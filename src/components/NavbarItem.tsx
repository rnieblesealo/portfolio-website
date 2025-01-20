interface NavbarItemProps {
  text: string
  url: string
}

function NavbarItem({ text, url }: NavbarItemProps) {
  return (
    <li className="flex-centered-all max-width max-height tiny5 walled-list-item">
      <a href={url}>{text}</a>
    </li>
  )
}

export default NavbarItem
