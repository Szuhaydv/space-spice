import { useRef } from "react"
import { Link } from "react-router-dom"

function Hero() {
  const circle = useRef(null)
  const plate = useRef(null)
  const astronaut = useRef(null)
  const circleAddFunction = () => {
    circle.current.classList.add("circle-onhover")
    plate.current.classList.add("plate-show")
  }
  const circleRemoveFunction = () => {
    circle.current.classList.remove("circle-onhover")
    plate.current.classList.remove("plate-show")
  }
  const astronautAnimation = () => {
    astronaut.current.classList.add("play-animation")
  }
  const astronautHide = () => {
    astronaut.current.classList.remove("play-animation")
  }

  return (
    <div className="hero" id="home">
      <section className="information">
        <div className="slogan">
          <h3><span className="linebreak">Stop with the <span className="monotone">monotone</span>,</span> start cooking with <em><span className="spice">SPICE!</span></em></h3>
        </div>
        <div className="extra-info">
          <ul className="info-list">
          <li className="first-li">
            <div className="planet-img-container" onMouseOver={circleAddFunction} onMouseOut={circleRemoveFunction}>
              <img src="/assets/planet-earth.png" alt="planet-1"/>
              <div ref={circle} className="circle"></div>
              <img ref={plate} className="food" src="/assets/food-png-7.png" alt="plate-dish" />                 
            </div>            
            <div className="info-title"><h4 className="big-title">Cook with love, not out of necessity...</h4><h4 className="small-title">Cook with love</h4></div>
            <p>With our special filters you can always find the perfect meal for the occasion.</p>
          </li>
          <li className="planet-2">
            <div className="planet-img-container">
              <img src="/assets/jupiter.png" alt="planet-2"/>
            </div>         
            <div className="info-title"><h4 className="big-title">More than 10000+ monthly visitors</h4><h4 className="small-title">10000+ monthly visitors</h4></div>              
            <p>At SPACE/SPICE we can confidently say that we take care of our users' needs!</p>
          </li>
          <li className="planet-3">
            <div className="planet-img-container" onMouseOver={astronautAnimation} onMouseOut={astronautHide}>
              <img src="/assets/uranus.png" alt="planet-3"/>
              <img ref={astronaut} className="astronaut-3" src="/assets/cute-astronaut-3.png" alt="astronaut-icon-3" />
            </div>
            <div className="info-title"><h4 className="big-title">10+ award winning chefs, and 5000+ recipes!</h4><h4 className="small-title">And 5000+ recipes!</h4></div>              
            <p>At SPACE/SPICE quality is everything, this is why our chefs have decades of experience.</p>
          </li>
        </ul>
        </div>
      </section>
      <main>
        <div className="dish-container">

          <section className="dishes">

            <div className="dish1">
              <div className="comment1">
                <h6><b className="big-title">Fried onion rings & salad</b><b className="small-title">Onion rings</b></h6>
                <h6 className="chef-name">by Jeremiah Lagasse</h6>
              </div>
              <img src="/assets/food-png-3.png" alt="dish-1"/>
            </div>

            <h5 className="slogan-2">Recipes from all around the UNIVERSE... <span>The easiest, the healthiest and the most flavorful - all in one place!</span></h5>

            <div className="dish2">
              <div className="comment2">
                <h6><b>Japanese sushi set</b></h6>
                <h6 className="chef-name">by Justin Tsai</h6>
              </div>
              <img src="/assets/food-png-6.png" alt="dish-2"/>
            </div>

            <div className="dish3">
              <div className="comment3">
                <h6><b>Meatball skewers</b></h6>
                <h6 className="chef-name">by Eric Miller</h6>
              </div>
              <img src="/assets/meatballs.png" alt="dish-3"/>
            </div>
          </section>
        </div>
        <div className="explore">
          <Link to="/recipes"><button className="hero-button">LET'S EXPLORE!</button></Link>
          <img src="/assets/astronaut-spaceship.png" alt="astronaut-spaceship" />
        </div>
      </main>
    </div>
  )
}

export default Hero;