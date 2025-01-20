const cloudDimensions = [212 / 1.5, 115 / 1.5]

function Cloud() {
  return (
    <img
      className="cloud"
      src="./images/cloud.png"
      width={`${cloudDimensions[0]}`}
      height={`${cloudDimensions[1]}`} />
  )
}

function Clouds() {
  return (
    <div className="clouds">
      <Cloud />
      <Cloud />
      <Cloud />
    </div>
  )
}

export default Clouds
