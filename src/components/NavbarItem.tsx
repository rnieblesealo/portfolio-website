import { useState, useEffect } from "react"

interface NavbarItemProps {
  text: string
  shortText?: string // Shorter version of text for small screens
  url: string
}

function NavbarItem({ text, shortText, url }: NavbarItemProps) {
  const mobilePortraitThreshold = 500;
  const [isMobilePortrait, setIsMobilePortrait] = useState(window.innerWidth <= mobilePortraitThreshold);

  // NOTE:
  // first arg is func to run on effect
  // 2nd arg is list of deps (when to run that effect)
  // return value is cleanup function to be run when component is offloaded
  useEffect(() => {
    // Add listener for resize events, querying the width each time, if less than the threshold we set, update isMobilePortrait boolean
    function onResize() {
      setIsMobilePortrait(window.innerWidth < mobilePortraitThreshold);
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  console.log(isMobilePortrait);

  // Make shorter version of text on small screens so nav fits
  let showText = text;
  if (isMobilePortrait) {
    if (shortText) {
      showText = shortText;
    } else {
      showText = text.substring(0, 3).toUpperCase();
    }
  }

  return (
    <li className="flex-centered-all max-width max-height tiny5 walled-list-item selectable select-grow-text select-yellow">
      <a href={url} className="flex-centered-all max-width max-height select-yellow">{showText}</a>
    </li>
  )
}

export default NavbarItem
