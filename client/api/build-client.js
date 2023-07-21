import axios from "axios";


export default ({req}) =>{
    if (typeof window === "undefined") {
        
        return axios.create({
            baseURL: "http://10.109.155.108",
            headers: req.headers
        })
      } else {
        return axios.create({
            baseURL:"/",
            
        })
      }
}