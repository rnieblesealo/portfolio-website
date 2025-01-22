import Language from "./Language.tsx"

const profileImgDimensions = [200, 200]
const profileImgSrc = "./images/profile.jpg"

const LANGUAGES = [
  {lang: "html5", useFa: false},
  {lang: "css3", useFa: false},
  {lang: "javascript", useFa: false},
  {lang: "typescript", useFa: false},
  {lang: "nodejs", useFa: false},
  {lang: "react", useFa: false},
  {lang: "python", useFa: false},
  {lang: "java", useFa: false},
  {lang: "swift", useFa: false},
  {lang: "xcode", useFa: false},
  {lang: "c", useFa: false},
  {lang: "cplusplus", useFa: false},
  {lang: "unity", useFa: false},
  {lang: "csharp", useFa: false},
]

const langsList = LANGUAGES?.map((lang) => (
  <Language lang={lang.lang} useFa={lang.useFa}/>
))

function Profile() {
  return (
    <header className="flex-centered-all flex-col top-margin">
      <p className="light-stroke center-text funnel-sans larger-text"><b>Hey there! My name is</b></p>
      <img className="dark-blue-bg padding-frame slighter-top-margin" src={`${profileImgSrc}`} width={`${profileImgDimensions[0]}`} height={`${profileImgDimensions[1]}`} alt="Profile image" />
      <h1 id="profile-name" className="center-text profile-name flex-centered-all">Rafael Niebles</h1>
      <p className="light-stroke center-text funnel-sans larger-text slight-top-margin"><b>and I'm a</b></p >
      <h1 id="profile-title" className="profile-name flex-centered-all">Software Engineer</h1>
      <p className="light-stroke center-text funnel-sans larger-text slighter-top-margin"><b>who builds with</b></p>
      <ul id="langs-list" className="padding-frame dark-blue-bg flex-centered-h flex-row gapped slighter-top-margin flex-wrap">
        {langsList}
      </ul>
      <p className="light-stroke center-text larger-text slighter-top-margin funnel-sans"><b>and a whole lot of <i className="fa-solid fa-heart red-fg largest-text"></i> !</b></p>
    </header >
  )
}

export default Profile
