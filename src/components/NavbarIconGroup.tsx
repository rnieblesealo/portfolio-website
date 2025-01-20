function NavbarIconGroup(props) {
  return (
    <li className="navbar-item pixel-body-text">
      <div className="flex-centered-all flex-row max-width max-height">
        {props.icons}
      </div>
    </li>
  )
}

export default NavbarIconGroup 
