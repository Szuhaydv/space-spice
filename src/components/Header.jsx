import { Link } from 'react-router-dom'
import { useRef } from 'react';


function Header() {
  const recipesLink = useRef(null)
  const aboutLink = useRef(null)
  const contactLink = useRef(null)
  const dailyLink = useRef(null)

  const nav = useRef(null)

  const handleClick = (value) => {
    let clickedNav = null
    if (value === "recipes") {
      clickedNav = recipesLink
    }
    if (value === "about") {
      clickedNav = aboutLink
    }
    if (value === "contact") {
      clickedNav = contactLink
    }
    if (value === "daily") {
      clickedNav = dailyLink
    }
    recipesLink.current.classList.remove("nav-link-click")
    aboutLink.current.classList.remove("nav-link-click")
    contactLink.current.classList.remove("nav-link-click")
    dailyLink.current.classList.remove("nav-link-click")
    if (clickedNav) {
      clickedNav.current.classList.add("nav-link-click")
    }
  }
  
  const navHamburger = () => {
    nav.current.classList.toggle("nav-hamburger")
  }

  return (
      <header className="main-header">
        <div className="logo">
          <h1>
            <Link onClick={() => handleClick("none")} to="/" className="title-home-link">
              <img className="logo-title" src="/assets/TITLE2.png" alt="SPACE SPICE"/>
            </Link>             
            <Link onClick={() => handleClick("none")} className="logo-home-link"to="/"><img className="logo-img" src="/assets/LOGO.png" alt="LOGO"/></Link>
          </h1>
        </div>
        <nav ref={nav} className="nav-hamburger">
          <img onClick={() => navHamburger()} src="/assets/hamburger-icon.png" alt="" />
          <Link onClick={() => {
              handleClick("recipes")
              navHamburger()
              }} ref={recipesLink} className="nav-link" to={`recipes/`}><h2 className="recipes">Recipes</h2></Link>
          <Link onClick={() => {
              handleClick("about")
              navHamburger()
              }} ref={aboutLink} className="nav-link" to={`about/`}><h2 className="about">About</h2></Link>
          <Link onClick={() => {
              handleClick("contact")
              navHamburger()
              }} ref={contactLink} className="nav-link" to={`contact/`}><h2 className="contact">Contact</h2></Link>
          <Link onClick={() => {
              handleClick("daily")
              navHamburger()
              }} ref={dailyLink} className="nav-link" to={`daily-special/`}><h2 className="daily-special">Daily Special</h2></Link>
          
        </nav>
        <div className="socials">
          <a href="https://www.facebook.com/facebook" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="https://twitter.com/elonmusk" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
          <a href="https://github.com/ONYX-AVRA" target="_blank"><i className="fa-brands fa-square-github"></i></a>
          <a href="https://www.linkedin.com/in/david-szuhay-b76637154/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </header>
  )
}

export default Header;