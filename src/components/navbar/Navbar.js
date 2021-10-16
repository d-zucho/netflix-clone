import { useState, useEffect } from 'react'

import mainLogo from '../../assets/netflix_logo_white.png'
import avatar from '../../assets/netflix-avatar.png'
import './navbar.css'

function Navbar() {
  //? -- Handle Scroll Animation --

  const [show, handleshow] = useState(false)
  // setting initial value of state (show) to fallse

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true)
    } else {
      handleshow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => {
      window.removeEventListener('scroll', transitionNavbar)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img src={mainLogo} className="nav__logo" alt="Logo" />
        <img src={avatar} className="nav__avatar" alt="Avatar" />
      </div>
    </div>
  )
}

export default Navbar
