import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
window.React = React
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage';
import Root from './Root';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Details from './pages/Details';
import DailySpecial from './pages/Daily Special';
import Attributions from './pages/Attributions';
import { useGlobalContext, AppProvider } from './context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "recipes/",
        element: <Recipes />,
      },
      {
        path: "recipes/:id/",
        element: <Details />
      },
      {
        path: "daily-special/",
        element: <DailySpecial />
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "attributions/",
        element: <Attributions />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)