interface NavbarItemProps {
  text: string
  url: string
}

function NavbarItem({ text, url }: NavbarItemProps) {
  return (
    <li><a href={url}>{text}</a></li>
  )
}

export default NavbarItem
