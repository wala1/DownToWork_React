import axios from "axios"

const API = axios.create({baseURL:"http://localhost:3002"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("user_info")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user_info").token)}`
        console.log("localStorage.getItem('user_info'):"+ localStorage.getItem("user_info"));
        console.log("req : "+ req);
    }
    return req;
})

export const signIn = (data) => API.post("/users/signin", data)
export const signInGoogle = (accessToken) => API.post("/users/signin", {
    googleAccessToken: accessToken
})

export const signUp = (data) => API.post("/users/signup", data)
export const signUpGoogle = (accessToken) => {
    API.post("/users/signup", {
        googleAccessToken: accessToken
    });
    console.log("here is : "+ accessToken);
}