import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";



export default function Footer() {
  const homeSiteNav = useRef(null)
  const currentPath = useLocation().pathname
  const myFunction = () => {
    if (currentPath != "/"){
      homeSiteNav.current.classList.add("hidden")
    } else if (currentPath === "/") {
      homeSiteNav.current.classList.remove("hidden")
    }
  }

  useEffect(() => {
    myFunction()
  }, [homeSiteNav, currentPath])
  return(
    <div className="footer">
          <div className="footer-logo">
            <img src="/assets/LOGO.png" alt="NONE" />
            <h5>© 2023 Szuhay Dávid. All rights reserved.</h5>
          </div>
          <div className="site-map">
            <div className="site-map-website">
              <Link to={`/`}>Home</Link>
              <Link to={`recipes/`}>Recipes</Link>
              <Link to={`about/`}>About</Link>
              <Link to={`contact/`}>Contact</Link>
              <Link to={`daily-special/`}>Daily Special</Link>
            </div>
            <div ref={homeSiteNav} className="site-map-home">
              <a href="#home">Home</a>
              <a href="#popular">Reviews/Popular</a>
              <a href="#chefs">Meet the Chefs</a>
              <Link to={`attributions/`}>Attributions</Link>
            </div>            
          </div>
          <div className="footer-contact">
            <h5>Contact Information (Sample)</h5>
            <div className="footer-contact-information">
              <h6>Address</h6>
            <p>Space Spice, 1520 Nutters Barn Lane</p>
            <p>Moorland, CA 50566</p>
            <h6>E-mail</h6>
            <p>spacespice@sample.com</p>
            <h6>Phone</h6>
            <p>+1 724-459-4103</p>
            <p>(+1 225-307-9740)</p>
            </div>            
          </div>
        </div>
        
  )
}