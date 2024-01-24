import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../context"
import { useEffect } from "react";
import { useLocation } from "react-router";


export default function Details(){
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {id} = useParams()
  const {recipes} = useGlobalContext()
  const thisRecipe = recipes.find((recipe) => recipe.id == id);
  
  if (thisRecipe) {
    return(
        <div className="detailed-recipe">

          <div className="left-side">
            <div className="detailed-img-container">
              <img src={thisRecipe.image} alt="image about a single dish"/>
              <h2>{thisRecipe.title}</h2>
            </div>
            <div className="ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {thisRecipe.extendedIngredients.map((ingredient, index) => {
                  return(
                    <li key={index}>
                      <p key={ingredient.name}>{`${+parseFloat((Math.round(ingredient.measures.metric.amount * 4) / 4)).toFixed(2)} ${ingredient.measures.metric.unitShort} ${ingredient.name}`}</p>
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
                  {thisRecipe.cuisines[0] ? thisRecipe.cuisines.join(" ") : "-"}
                </h5>
              </div>   
              <h3>Number of servings: {thisRecipe.servings}</h3>
              <h3>Price per serving: {parseFloat(thisRecipe.pricePerServing / 100).toFixed(2)}$</h3>
              </div>         
            </div>
            
            <div className="instructions">
              <h2>Instructions: </h2>
              {thisRecipe.analyzedInstructions.length > 1 ? thisRecipe.analyzedInstructions.map((set, index) => {
                return(
                  <div className="set">
                    <h3>Part {index + 1}</h3>
                    {set.steps.map((step) => {
                      return <p>{step.step}</p>
                    })}
                  </div>
                )
                }) : thisRecipe.analyzedInstructions.length === 1 ? thisRecipe.analyzedInstructions[0].steps.map((step) => {
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
  
  
}