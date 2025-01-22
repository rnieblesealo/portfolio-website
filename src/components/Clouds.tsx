const cloudDimensions = [212 / 1.5, 115 / 1.5]

function Cloud() {
  return (
    <img
      className="pixelated"
      src="./images/cloud-b.png"
      width={`${cloudDimensions[0]}`}
      height={`${cloudDimensions[1]}`} />
  )
}

function Clouds() {
  return (
    <div id="clouds">
      <Cloud />
      <Cloud />
      <Cloud />
    </div>
  )
}

export default Clouds
