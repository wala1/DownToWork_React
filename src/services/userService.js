import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:3001/users/login';

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
        throw error.response.data;
    }
    };