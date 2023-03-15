import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:3001/users/login';
const registerUrl = 'http://localhost:3001/users/register'

export const login = async (email, password) => {
    //    const navigate = useNavigate();
    try {
        const { data } = await axios.post(url, { email, password });

        localStorage.setItem('token', data.token);

        localStorage.setItem('user', JSON.stringify(data.user));

        // if(data.user&&data.token&&data.user.isAdmin){
        //     navigate('/dashboard')
        // }else if (data.user&&data.token&&(!data.user.isAdmin)){
        //     navigate('/Main')
        // }
        console.log(data);

        return data.user;
    } catch (error) {
        console.log(error.response.data);
        throw error.response.data;

    }
};

export const register = async (name, email,DateOfBirth, password) => {
   
    try {
        await axios.post(registerUrl, {
            name,
            email,
            DateOfBirth,
            password,
        })
        alert("check your Email and confirm your account to sign in")
           
    }
    catch (err) {
        console.log(err.message)
    }
}