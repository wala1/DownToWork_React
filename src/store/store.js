import {create} from 'zustand';
import {login} from '../services/userService';
// import { useNavigate } from 'react-router-dom';
const useStore =   create((set) => ({
  user: null,
  isLoading: false,
  isLogged: false,
  err: null,
  num : null,
  login: async (email, password) => {
    try {const user =  await login(email, password);
    set({ user , isLoading: false , isLogged: true, err: null});
    console.log(user);}
    catch(err){
      set({err, isLoading: false});}
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null , isLogged: false });

  },
  setNum : (number) => set({num : number})

}));
export default useStore;
    