import {create} from 'zustand';
import {login} from '../services/userService';
// import { useNavigate } from 'react-router-dom';
const useStore =   create((set) => ({
  user: null,
  isLoaded: false,
  isLogged: false,
  loading:false,
  err: null,
  num : null,
  sales:[],
  login: async (email, password) => {
    try {
      set ({loading: true});

      const user =  await login(email, password);
    set({ user , loading:false, err: null});
    setTimeout(() => {
      set({loading:false});}, 1000);
    console.log(user);}
    catch(err){
      set({err, isLoading: false});}
      setTimeout(() => {
        set({loading:false});}, 1000);
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null , isLogged: false });

  },
  setNum : (number) => set({num : number})

}));
export default useStore;
    