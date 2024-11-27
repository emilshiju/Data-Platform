

import React from "react";

import { useSelector} from "react-redux"
import { useDispatch} from "react-redux";
import { removeUserCredential } from "../Store/authSlice";


const Header=()=>{
  const user=useSelector((state)=>state.auth.data.userName)
  const dispatch = useDispatch();


  const logout_User=()=>{

    dispatch(removeUserCredential())
  }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {`Hi ${user}`}
          </span>
        </a>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            <li>
              <a
               onClick={logout_User}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                LOGOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default Header