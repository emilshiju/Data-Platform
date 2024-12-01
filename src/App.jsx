
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Pages/Home/Home"
import LoginPage from "./Pages/Authentication/Login"
import Register from "./Pages/Authentication/Register"
import AuthProtectedRoute from "./Route/AuthProtectedRoute"
import ProtectedRoute from "./Route/ProtectedRoute"
import LocationFetching from "./Components/LocationFetching"




const router=createBrowserRouter([
  {
      path:"/",
      element:<ProtectedRoute><Home  /></ProtectedRoute>
  },
  {
    path:'/login',
    element:<AuthProtectedRoute><LoginPage  /></AuthProtectedRoute>
  },
  {
    path:"/register",
    element:<AuthProtectedRoute><Register  /></AuthProtectedRoute>
  },
  {
    path:'/map/:first/:second',
    element:<LocationFetching  />
  }
 
])


const App=()=>{
  
  return <RouterProvider router={router} />
}
export default App