import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function Popular() {
  const {recipes, count, setCount} = useGlobalContext()
  
  const chevronButton = (task) => {
    if (task === "add") {
      count === 11 ? setCount(0) : setCount((currentCount) => currentCount + 1)
    }
    if (task === "sub") {
      count === 0 ? setCount(11) : setCount((currentCount) => currentCount - 1)
    }
  }

  return(
    <div className="popular-section" id="popular">
          <div className="reviews-container">
            <h3>User Reviews</h3>
            <div className="user-reviews">
              <div className="review1">
                <i className="fa-solid fa-quote-left"></i>
                <p>Finally found the perfect recipe website! <span className="review-span-1">Clear instructions, mouthwatering pictures, and endless variety.</span> <span className="review-span-2">Discovering new favorites has never been easier.</span></p>
                <i className="fa-solid fa-quote-right"></i>                
              </div>
              <div className="dividing-line"></div>
              <div className="review2">
                <i className="fa-solid fa-quote-left"></i>
                <p>Incredible recipe website! <span className="review-span-1">Easy instructions, diverse recipes, and amazing results.</span><span className="review-span-2"> It's my go-to for impressive meals that never disappoint.</span></p>
                <i className="fa-solid fa-quote-right"></i>                
              </div>
              <div className="dividing-line"></div>
              <div className="review3">
                <i className="fa-solid fa-quote-left"></i>
                <p><span className="review-span-2">Addictive recipe website! </span>From quick and healthy to indulgent treats, it offers endless options. <span className="review-span-1">My culinary companion for inspiration and delicious creations.</span></p>
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
          <div className="popular-container">
            <h3>Popular Right Now</h3>
            <div className="popular-food">
              <i className="fa-solid fa-chevron-left" onClick={() => chevronButton("sub")}></i>
              <i className="fa-solid fa-chevron-right" onClick={() => chevronButton("add")}></i>
              <img src={recipes[count].image} alt="popular recipe right now" />
              <Link to={`recipes/${recipes[count].id}`}><h4>{recipes[count].title}</h4></Link>
            </div>
          </div>
        </div>
  )
}

export default Popular;