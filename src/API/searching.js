
import api from "../Interceptor";



const Searching=(data)=>{

    return new Promise((resolve,reject)=>{

        api.get(`/search?value=${data}`)
        .then((response)=>{
            resolve(response.data.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })



}

export default Searching