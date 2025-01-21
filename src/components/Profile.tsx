const profileImgDimensions = [200, 200]
const profileImgSrc = "./images/profile.jpg"

function Profile() {
  return (
    <header className="flex-centered-all flex-col top-margin">
      <p className="tiny5">Hi! My name's</p>
      <img className="dark-blue-bg padding-frame" src={`${profileImgSrc}`} width={`${profileImgDimensions[0]}`} height={`${profileImgDimensions[1]}`} alt="Profile image" />
      <h1 id="profile-name" className="profile-name flex-centered-all">Rafael Niebles</h1>
    </header>
  )
}

export default Profile
