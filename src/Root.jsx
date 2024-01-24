import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'

export default function Root() {
  const location = useLocation()
  if (location.pathname == "/") {
    return(
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  } else {
    return(
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    )
  }
}

// const url = `https://api.spoonacular.com//recipes/random?apiKey=${import.meta.env.VITE_API_KEY1}&number=12`



  // export async function fetchRecipes() {
  //   const [loading, setLoading] = useState(false)
  //   const [recipes, setRecipes] = useState([])
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     if (data){
  //       setRecipes(data.recipes)
  //       setLoading(false)
  //     }
  //     else{
  //       setRecipes([])
  //       setLoading(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }
  
  // useEffect(() => {
  //   fetchRecipes()
  // },[])
// export async function fetchRecipes() {
//   const response = await fetch(url)
//   const data = await response.json()
//   if(data) {
//     return { data }
//   }
// }
