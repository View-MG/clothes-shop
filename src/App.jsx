import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "./component/header"
import Advertise from "./component/advertise-page"
import Mens from "./pages/Mens"
import Footer from "./component/footer"
import HamburgerMenu from "./component/hamberger_menu"
import CollectionPage from "./component/CollectionPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Advertise/><Footer/></>
    },
    {
      path: "/mens",
      element: <><Header/><HamburgerMenu/><CollectionPage/><Mens/></>
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
