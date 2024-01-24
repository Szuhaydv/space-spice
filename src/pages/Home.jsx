import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Chefs from '../components/Chefs'
import Preloader from '../components/Preloader'
import { AppContext, useGlobalContext } from '../context'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const { loading } = useGlobalContext(AppContext)
  if(loading) {
    return(
      <Preloader />
    )
  } else {
    return(
      <>
        <Hero />
        <Popular />
        <Chefs />
      </> 
    )
  }
}