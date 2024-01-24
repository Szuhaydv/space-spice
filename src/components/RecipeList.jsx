import { useGlobalContext } from "../context"
import SingleRecipe from './SingleRecipe' 

export default function RecipeList() {
  const { recipes, loading } = useGlobalContext()
  const newRecipes = recipes.filter((recipe, index) => {
    if (index < 12)
      return recipe
  })
  return(
    <div className="grid-container">
      {newRecipes.length > 0 ? 
        newRecipes.map((recipe) => {
          return <SingleRecipe key={recipe.id} {...recipe} />
        }) : <h2>No recipes found...</h2>
      }
    </div>
  )  
} 
