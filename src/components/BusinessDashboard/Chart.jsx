import axios from 'axios'
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useStore from '../../store/store'


import React from 'react'




function Chart() {
    const [monthlyIncome, setMonthlyIncome] = useState([]);
    const userString = localStorage.getItem("user");
    const isLoaded = useStore(state => state.isLoaded);
    const user = JSON.parse(userString);
    const id = user._id;

useEffect(() => {
    const getIncome = async () => {
        try {
            const res = await axios.get(user.isAdmin ?"http://localhost:3001/orders/allIncome":
             "http://localhost:3001/orders/allIncomeByOwner/" + id);
            console.log(res.data)
            setMonthlyIncome(res.data);
            useStore.setState({ isLoaded: true });
        }
        catch (error) {
            console.log(error);
        }
    };
    getIncome();
}, []);

const sortedMonthlyIncome = monthlyIncome.slice().sort((a, b) => a._id - b._id);

if(!isLoaded){
    return(
    <Box sx={{ display: 'flex' , justifyContent:'center', margin:20}}>
    <CircularProgress />
    </Box>)
    }

  return (
    <div>
        <LineChart width={600} height={300} data={sortedMonthlyIncome}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis  dataKey="_id" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
</LineChart>

    </div>
  )
}

export default Chart