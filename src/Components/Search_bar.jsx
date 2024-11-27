


import React ,{useState,useEffect} from "react"
import { ToastContainer, toast, Slide } from "react-toastify";
import Searching from "../API/searching"
import ListTable from "./ListTable"



const SearchBar=()=>{

    

    const [search_Input,set_Search_Input]=useState('')
    const [searchedData,setSearchedData]=useState(false)

    const searching_Change=(e)=>{
    

        set_Search_Input(e.target.value)
       
    }

    const searchData=()=>{

      if(search_Input.length==0){

          toast.error("Type something!", {
            position: "top-right",
            autoClose: 1000,
          });

      }else{

      
     
        
        Searching(search_Input)
        .then((res)=>{
          setSearchedData(res)
         
        })

      }

    }

    const refresh=()=>{
     
      set_Search_Input('')
       setSearchedData(false)
    }


    return (
      <>
      <ToastContainer />

        <div className="max-w-md mx-auto mt-24">
      <label  className="mb-2 text-sm font-medium text-gray-900 sr-only ">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0   start-0 flex items-center ps-3">
          <svg
          onClick={refresh}
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
        onChange={searching_Change}
        value={search_Input}
          type="search"
         
          className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50  "
          placeholder="Search Places ...."
        
        />
        <button
          // type="submit"
          onClick={searchData}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700    font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </div>
    {searchedData&&<ListTable  allData={searchedData} />}
    </>

    )
}

export default SearchBar