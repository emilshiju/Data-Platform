




import React from 'react'
import { useSelector} from "react-redux"
import {Navigate} from "react-router-dom"



const ProtectedRoute=({children})=>{

    const user=useSelector((state)=>state.auth.userInfo)
    // const data=useSelector((state)=>state.auth.data)

   

    if (!user) {
        return <Navigate to="/login" />;
      }
      return children


}

export default ProtectedRoute