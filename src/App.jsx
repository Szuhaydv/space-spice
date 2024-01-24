import React from 'react';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider 
} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useGlobalContext } from './context';
import Preloader from './components/Preloader';
import Details from './pages/Details'
import DailySpecial from './pages/Daily Special';
import Attributions from './pages/Attributions';

function App() {
  const {loading} = useGlobalContext()
  if (loading) {
    return <Preloader />
  } else {
    // return (
    //   <Router>
    //       <Header />
    //       <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route path="recipes" element={<Recipes />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="contact" element={<Contact />} />
    //         <Route path="recipes/:id" element={<Details />} />
    //         <Route path="daily-special"  element={<DailySpecial />} />
    //         <Route path="/*" element={<ErrorPage />}/>
    //         <Route path="attributions" element={<Attributions />} /> 
    //       </Routes>  
    //       <Footer />
        
    //   </ Router>
    // )
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route element={<About />} />
          <Route element={<Recipes />} />
          <Route element={<Contact />} />
        </Route>
      )
    );
  }
} 

return (
  <div className='App'>
    <RouterProvider router={router} />
  </div>
)

export default App
