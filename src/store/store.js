import {create} from 'zustand';
import axios from 'axios';
import {login} from '../services/userService';
// import { useNavigate } from 'react-router-dom';
const useStore =   create((set) => ({
  user: null,
  isLoading: false,
  isLogged: false,
  login: async (email, password) => {
    const user = await login(email, password);
    set({ user , isLoading: false , isLogged: true});
    console.log(user);
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null , isLogged: false });

  },
}));
export default useStore;
    