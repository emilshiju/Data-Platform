import axios from "axios";



const api=axios.create({
    baseURL:'http://localhost:3000/'
})





api.interceptors.request.use((config)=>{

  try{

        if (config.data instanceof FormData) {
       
          config.headers['Content-Type'] = 'multipart/form-data';
          
        } else {
      
          config.headers['Content-Type'] = 'application/json';
        }
             
        const token = JSON.parse(localStorage.getItem('accestoken')); 
        if (token) {
          
          config.headers.Authorization = `Bearer ${token}`;
        }
       
        config.withCredentials = true;
       

        return config

      
      }catch(error){
       

      }
    },
    (error)=>{
      
        return Promise.reject(error);
    }


)



api.interceptors.response.use(


    function (response) {

      try {
      
        // console.log('Response data:', response.data);
      } catch (error) {


        if(error.response){
          
        }
       
        console.error('Error occurred in response interceptor:', error);
      }
  
      return response;
    }
    
  );
  
    
    


  


export default api