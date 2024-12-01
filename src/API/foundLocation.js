import axios from "axios"


const FoundLocation=(address)=>{

    return new Promise((resolve,reject)=>{

        const geocodeUrl = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&country=it&proximity=ip&types=address&language=de&access_token=pk.eyJ1IjoiZW1pbGxzaGlqdSIsImEiOiJjbHdkcXQwcXMwN2oyMmlxanpxeHV0MnpvIn0.RNUnWz60Xtvl26z65jOISw`;

       axios.get(geocodeUrl)
       .then((res) => {
    
        const features = res.data.features;

        if (features.length > 0) {
     
            const geometry = features[0].geometry;

            const [longitude, latitude] = geometry.coordinates;
             resolve({longitude,latitude})
        } else {
            resolve(false)
            
        }
    })
    .catch((error) => {
        console.log(error)
        reject(error)
    });
    
    })
}


export default FoundLocation