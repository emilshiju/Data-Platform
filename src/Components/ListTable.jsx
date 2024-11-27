import React, { useState } from "react";
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import PdfDocument from "./PdfGenerator";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";


const ListTable=({allData})=>{
    const navgiate=useNavigate()


    const [displayData,setDisplayData]=useState(false)



const dPdf = (pdfUrl) => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfUrl.split('/').pop(); 
  link.target = '_blank';  
  link.click();  
 
};



const downloadPdf=(alldata)=>{
  

  <PdfDocument  data={alldata} />

    // const doc = <PdfDocument data={alldata} />;
    // pdf(doc)
    //   .toBlob()
    //   .then((blob) => {
    //     const link = document.createElement("a");
    //     link.href = URL.createObjectURL(blob);
    //     link.download = "selected-data.pdf";
    //     link.click(); // Automatically trigger the download
    //   });

}



    return(
        <div>
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
            </tr>
          </thead>
          {allData && allData.length > 0?(
            <tbody>
            {allData.map((curr,index)=>(

          
            <tr className="bg-white border-b ">
              <th className="px-6 py-4">
                {curr.header}
              </th>
              <td className="px-6 py-4">{curr.dates}</td>
              <td className="px-6 py-4">{curr.addresses}</td>
              <td className="px-6 py-4" onClick={()=>dPdf(curr.url)}>View</td>
            </tr>
            
            ))}</tbody>):<div className="flex flex-row justify-center mt-20  text-4xl ml-60">NOTHING .......</div>}
        </table>
      </div>
      </div>


    )
}

export default ListTable