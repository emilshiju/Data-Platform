import React from "react";

import { useNavigate } from 'react-router-dom';
import PdfDocument from "./PdfGenerator";

import FoundLocation from "../API/foundLocation";

import { ToastContainer, toast, Slide } from "react-toastify";

const ListTable=({allData})=>{


    const navigate=useNavigate()



const dPdf = (pdfUrl) => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfUrl.split('/').pop(); 
  link.target = '_blank';  
  link.click();  
 
};



const downloadPdf=(alldata)=>{
  

  <PdfDocument  data={alldata} />

}



const showErrorMessage=()=>{
  toast.error("Location not found!", {
    position: "top-right",
    autoClose: 1000,
  });
  
  
}

const fetchLocation=(add)=>{

  FoundLocation(add)
  .then((res)=>{

    if(res){

      let {longitude,latitude}=res
      navigate(`/map/${longitude}/${latitude}`)

      console.log("yes heree")
    }else{
      showErrorMessage()
      
    }
  })
  .catch((error)=>{
    showErrorMessage()
  })




}



    return(
        <div>
           <ToastContainer />
        <div className="relative overflow-x-auto mt-20">
        <table className="w-[1000px] ml-72 text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Map
              </th>
            </tr>
          </thead>
          {allData && allData.length > 0?(
            <tbody>
            {allData.map((curr,index)=>(

          
            <tr className="bg-white border-b ">
              <th className="px-6 py-4">
                {curr&&curr.header.length>3?curr.header:'Null'}
              </th>
              <td className="px-6 py-4">{curr?.dates??'null'}</td>
              <td className="px-6 py-4">{curr?.addresses}</td>
              <td className="px-6 py-4" onClick={()=>dPdf(curr.url)}>View</td>
              <td className="px-6 py-4" onClick={()=>fetchLocation(curr?.addresses)}>view location</td>

            </tr>
            
            ))}</tbody>):<div className="flex flex-row justify-center mt-20  text-4xl ml-60">NOTHING .......</div>}
        </table>
      </div>
      </div>


    )
}

export default ListTable