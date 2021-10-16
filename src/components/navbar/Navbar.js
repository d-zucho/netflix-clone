// import N from './netflix-N.png'
// import netlogo from '../../assets/Netflix_Logo_RGB.webp'
import mainLogo from '../../assets/netflix-logo-back-black.jpeg'
import avatar from '../../assets/netflix-avatar.png'
import './navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__content">
        <img src={mainLogo} className="nav__logo" height="100px" alt="Logo" />
        <img src={avatar} className="nav__avatar" height="100px" alt="Avatar" />
      </div>
    </div>
  )
}

export default Navbar
