
import api from "../Interceptor";




const RegisterSubmit=(data)=>{




    return new Promise((resolve,reject)=>{
    

        api.post('/register',{data})
        .then((response)=>{
            resolve(response.data)
        })

    })
}

export default RegisterSubmit


export const loginSubmit=(data)=>{

    return new Promise((resolve,reject)=>{
        api.post('/login',{data})
        .then((res)=>{
            
            resolve(res.data)
        })
        .catch((error)=>{
            

            
           
            reject(error)
        })
    })
}