import RecipeList from "../components/RecipeList"
import { useState, useRef } from "react"
import { useGlobalContext } from "../context"

export default function Recipes() {
  const dessert = useRef(null)
  const breakfast = useRef(null)
  const mainCourse = useRef(null)
  const salad = useRef(null)
  const beverage = useRef(null)
  const northAmerica = useRef(null)
  const europe = useRef(null)
  const southAmerica = useRef(null)
  const africa = useRef(null)
  const asia = useRef(null)
  let {setRecipes, setLoading, apiValue, keyNumber} = useGlobalContext()
  let url = null
  const slider = useRef(null)
  const [sliderValue,setSliderValue] = useState(70)
  const searchInput = useRef(null)

  const fetchFilteredRecipes = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data){
        const newRecipeIDs = data.results.map((recipe) => {
          return recipe.id
        })
        const stringIDs = newRecipeIDs.join(",")
        const newUrl = `https://api.spoonacular.com//recipes/informationBulk?apiKey=${apiValue[keyNumber]}&ids=${stringIDs}&includeNutrition=false`
        const newResponse = await fetch(newUrl)
        const newData = await newResponse.json()
        setRecipes(newData)
        setLoading(false)
      }
      else{
        setRecipes([])
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleSlider = () => {
    setSliderValue(slider.current.value)
  }

  const handleSearch = () => {
    let type = ""

    if (breakfast.current.classList.contains("select-filter")) {
      type += ",breakfast"
    }
    if (mainCourse.current.classList.contains("select-filter")) {
      type += ",maincourse"
    }
    if (dessert.current.classList.contains("select-filter")) {
      type += ",dessert"
    }
    if (salad.current.classList.contains("select-filter")) {
      type += ",salad"
    }
    if (beverage.current.classList.contains("select-filter")) {
      type += ",beverage"
    }

    let cuisine = ""
    if (northAmerica.current.classList.contains("select-advanced-filter")) {
      cuisine += ",american"
    }
    if (europe.current.classList.contains("select-advanced-filter")) {
      cuisine += ",european"
    }
    if (southAmerica.current.classList.contains("select-advanced-filter")) {
      cuisine += ",latinamerican"
    }
    if (africa.current.classList.contains("select-advanced-filter")) {
      cuisine += ",african"
    }
    if (asia.current.classList.contains("select-advanced-filter")) {
      cuisine += ",asian"
    }
    url = `https://api.spoonacular.com//recipes/complexSearch?apiKey=${apiValue[keyNumber]}&cuisine=${cuisine}&type=${type}&maxReadyTime=${slider.current.value}&number=13`
    fetchFilteredRecipes()
    
  }

  

  const selector = (value) => {
    if (value === "breakfast") {
      breakfast.current.classList.toggle("select-filter")
    }
    if (value === "main-course") {
      mainCourse.current.classList.toggle("select-filter")
    }
    if (value === "dessert") {
      dessert.current.classList.toggle("select-filter")
    }
    if (value === "salad") {
      salad.current.classList.toggle("select-filter");
    }
    if (value === "beverage") {
      beverage.current.classList.toggle("select-filter");
    }
  }
  const advancedSelector = (value) => {
    if (value === "north-america")
      northAmerica.current.classList.toggle("select-advanced-filter")
    if (value === "europe")
      europe.current.classList.toggle("select-advanced-filter")
    if (value === "south-america")
      southAmerica.current.classList.toggle("select-advanced-filter")
    if (value === "africa")
      africa.current.classList.toggle("select-advanced-filter")
    if (value === "asia")
      asia.current.classList.toggle("select-advanced-filter")
  }

  const handleKeyDown = (e) =>{
    if(e.keyCode === 13 || e.key === "Enter") {
      url = `https://api.spoonacular.com//recipes/complexSearch?apiKey=${apiValue[keyNumber]}&query=${searchInput.current.value}`
      fetchFilteredRecipes()
    }
  } 

  return(
    <div className="recipes-page">
          
          <div className="recipes-page-container">
            <header className="recipes-page-header">
              <div className="searchbar">
                <h3>What are you looking for?</h3>
                <input placeholder="Steak, salad, muffin, etc..." ref={searchInput} onKeyDown={(e) => handleKeyDown(e)} type="text" />
              </div>
              <div className="filters">
                <div className="breakfast" onClick={() => selector("breakfast")}>                  
                  <i ref={breakfast} className="fa-solid fa-mug-saucer"></i>
                  <h4>Breakfast</h4>
                </div>
                <div className="main-course" onClick={() => selector("main-course")}>                  
                  <i ref={mainCourse} className="fa-solid fa-utensils"></i>
                  <h4>Main Course</h4>
                </div>
                <div className="dessert" onClick={() => selector("dessert")}>                  
                  <i ref={dessert} className="fa-solid fa-cookie-bite"></i>
                  <h4>Dessert</h4>
                </div>
                <div className="salad" onClick={() => selector("salad")}>                  
                  <i ref={salad} className="fa-solid fa-leaf"></i>
                  <h4>Salad</h4>
                </div>
                <div className="beverage" onClick={() => selector("beverage")}>
                  <i ref={beverage} className="fa-solid fa-martini-glass-empty" ></i>
                  <h4>Beverage</h4>                  
                </div>
              </div>

            </header>
            <div className="recipes-hero">
              <div className="advanced-filters">
                <div className="slider-container">
                  <h5>Ready in: <span>{sliderValue}</span> min.</h5>
                  <div className="slider">
                    <h6>0</h6>
                  <input onInput={() => handleSlider()} type="range" ref={slider} step="5" min="0" max="120" defaultValue={70}/>                
                  <h6>120</h6>
                  </div>                                
                </div>
                <div className="countries">
                  <h3>Cuisines:</h3>
                  <div className="us-eu">
                    <div className="north-america">
                      <img ref={northAmerica} onClick={() => advancedSelector("north-america")} src="/assets/north america.png" alt="north america icon" />
                      <h4>North American</h4>
                    </div>
                    <div className="europe">
                      <img ref={europe} onClick={() => advancedSelector("europe")} src="/assets/europe.png" alt="europe icon" />
                      <h4>European</h4>
                    </div>
                                          
                  </div>
                  <div className="la-af">
                    <div className="south-america">
                      <img ref={southAmerica} src="/assets/south america.png" onClick={() => advancedSelector("south-america")} alt="south america icon" />
                      <h4>South American</h4>
                    </div>
                    <div className="africa">
                      <img ref={africa} src="/assets/africa.png" onClick={() => advancedSelector("africa")} alt="africa icon" />
                      <h4>African</h4>
                    </div>                    
                  </div>
                  <div className="as">
                    <div className="asia">
                      <img ref={asia} onClick={() => advancedSelector("asia")} src="/assets/asia.png" alt="asia icon" />
                      <h4>Asian</h4>
                    </div>                    
                  </div>
                </div>
                <div className="search-go">
                  <button onClick={handleSearch}>SEARCH</button>
                </div>
              </div>
              <RecipeList />
            </div>             
          </div>
        </div>
  )
}