import {AUTH} from "../const/actionsTypes";
import axios from 'axios';

export const loadUser = () => async (dispath)=>{
    const localUser = JSON.parse(localStorage.getItem("user"))

    if(localUser){
        dispath({type: AUTH, data: localUser})
    }
}


export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/users/signin', {
        access_token: accessToken,
      });
      const { token } = response.data;
      localStorage.setItem('user', token);
      dispatch({ type: 'AUTH_USER', payload: token });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };
  
