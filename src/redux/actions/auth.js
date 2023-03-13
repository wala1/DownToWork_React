import {AUTH} from "../const/actionsTypes"
import * as api from "../../api/index"
import axios from 'axios';

export const loadUser = () => async (dispath)=>{
    const localUser = JSON.parse(localStorage.getItem("user_info"))

    if(localUser){
        dispath({type: AUTH, data: localUser})
    }
}

export const signin = (data2, navigate) => async (dispath) =>{
    try{
        const {data} = await api.signIn(data2)

        dispath({type: AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err);
    }
}

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/google', {
        access_token: accessToken,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      dispatch({ type: 'AUTH_USER', payload: token });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

export const signup = (formData, navigate) => async (dispatch)=>{
    try{
        // signup user
        const {data} = await api.signUp(formData)
        
        dispatch({type : AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

export const signupGoogle = (accessToken, navigate) => async (dispatch)=>{
    
    try{
        // signup user

        const {data} = await api.signUpGoogle(accessToken)
        console.log("data :"+ data);
        dispatch({type : AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err)
    }
}