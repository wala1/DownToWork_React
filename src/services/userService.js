import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:3002/users/login';
const registerUrl = 'http://localhost:3002/users/register'

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

export const register = async (name, email, password) => {
    try {
        await axios.post(registerUrl, {
            name,
            email,
            password,
        })
           
    }
    catch (err) {
        alert(err => alert('Something went wrong'));
    }
}