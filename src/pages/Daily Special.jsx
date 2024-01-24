import { useGlobalContext } from "../context"
import { useRef } from "react"

export default function DailySpecial() {
  const { specialRecipe } = useGlobalContext()
  const coverPlanet = useRef(null)
  const title = useRef(null)

  const handleClick = () => {
    coverPlanet.current.classList.add("cover-planet-hide")
    title.current.classList.remove("hidden-until")
  }

  return(
    <div className="detailed-recipe">

      <div className="left-side">
        <div onClick={() => handleClick()} ref={coverPlanet} className="cover-planet">
          <img onClick={() => handleClick()} src="/assets/jupiter.png" alt="cover image" />
          <h2 onClick={() => handleClick()}>CLICK ME!</h2>
        </div>
        <div className="detailed-img-container">          
          <img src={specialRecipe.image} alt="image about a single dish"/>
          <h2 ref={title} className="hidden-until">{specialRecipe.title}</h2>
        </div>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {specialRecipe.extendedIngredients.map((ingredient) => {
              return(
                <li key={ingredient.name}>
                  <p key={ingredient.id}>{`${+parseFloat((Math.round(ingredient.measures.metric.amount * 4) / 4)).toFixed(2)} ${ingredient.measures.metric.unitShort} ${ingredient.name}`}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      
      <div className="right-side">
        <div className="recipe-small-info">
          <div className="small-info-container">
            <div className="cuisines">
            <h3>Cuisines: </h3> 
            <h5>
              {specialRecipe.cuisines[0] ? specialRecipe.cuisines.join(" ") : "-"}
            </h5>
          </div>   
          <h3>Number of servings: {specialRecipe.servings}</h3>
          <h3>Price per serving: {parseFloat(specialRecipe.pricePerServing / 100).toFixed(2)}$</h3>
          </div>         
        </div>
        
        <div className="instructions">
          <h2>Instructions: </h2>
          {specialRecipe.analyzedInstructions.length > 1 ? specialRecipe.analyzedInstructions.map((set, index) => {
            return(
              <div className="set">
                <h3>Part {index + 1}</h3>
                {set.steps.map((step) => {
                  return <p>{step.step}</p>
                })}
              </div>
            )
            }) : specialRecipe.analyzedInstructions.length === 1 ? specialRecipe.analyzedInstructions[0].steps.map((step) => {
              return(
                <p>{step.step}</p>
              )
            }) : <h3>No instructions found...</h3>
          }
        </div> 
        
      </div>
        
    </div>
  )  
}