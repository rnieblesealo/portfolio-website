const profileImgDimensions = [200, 200]
const profileImgSrc = ""

function Profile() {
  return (
    <header>
      <p>Hi! My name's</p>
      <img src={`${profileImgSrc}`} width={`${profileImgDimensions[0]}`} height={`${profileImgDimensions[1]}`} alt="Profile image" />
      <h1>Rafael Niebles</h1>
    </header>
  )
}

export default Profile
