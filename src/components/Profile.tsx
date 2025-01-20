const profileImgDimensions = [200, 200]
const profileImgSrc = "./images/profile.jpg"

function Profile() {
  return (
    <header className="profile flex-centered-all flex-col">
      <p className="pixel-body-text">Hi! My name's</p>
      <img className="normal-body-text image-frame" src={`${profileImgSrc}`} width={`${profileImgDimensions[0]}`} height={`${profileImgDimensions[1]}`} alt="Profile image" />
      <h1 className="profile-name flex-centered-all">Rafael Niebles</h1>
    </header>
  )
}

export default Profile
