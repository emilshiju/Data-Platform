




import React from 'react'
import { useSelector} from "react-redux"
import {Navigate} from "react-router-dom"


const AuthProtectedRoute=({children})=>{

    const user=useSelector((state)=>state.auth.userInfo)
    // const data=useSelector((state)=>state.auth.data)

    if (!user) {
        return children
      }

    if (user) {
        return <Navigate to="/" />;
      }

      return children


}

export default AuthProtectedRoute
