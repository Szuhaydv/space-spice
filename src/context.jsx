import React, { useState, useContext, useEffect, useRef } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])
  const [count, setCount] = useState(6)
  const [keyNumber, setKeyNumber] = useState(0)
  const apiValue = [import.meta.env.VITE_API_KEY1, import.meta.env.VITE_API_KEY2, import.meta.env.VITE_API_KEY3]
  const url = `https://api.spoonacular.com//recipes/random?apiKey=${apiValue[keyNumber]}&number=13`

  const fetchRecipes = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      if (data){
        if(data.status === "failure") {
          if (keyNumber === 2) {
            console.log("API not accessible for the day")
          } else {
            setKeyNumber((keyNumber) => keyNumber += 1)
          }
        } else {
          setRecipes(data.recipes)
          setLoading(false)
        }        
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

  
  useEffect(() => {
    fetchRecipes()
  },[url])

  const specialRecipe = recipes[2]

  return (
    <AppContext.Provider value={{loading, specialRecipe, setLoading, recipes, keyNumber, apiValue, setRecipes, count, setCount}}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }