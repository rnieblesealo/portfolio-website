function NavbarIconGroup(props) {
  return (
    <li className="pixel-body-text max-width max-height">
      <div className="flex-centered-all flex-row max-height">
        {props.icons}
      </div>
    </li>
  )
}

export default NavbarIconGroup 
