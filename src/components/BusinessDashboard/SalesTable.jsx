import React from 'react'
import './SalesTable.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import Modal from './DeleteModal.jsx'
import useStore from '../../store/store'
import KeepMountedInfoModal from './InfoModal';
import DialogSelect from './DropDownSt';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



function SalesTable() {
    const [search, setSearch] = useState("");

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    //const [sales, setSales] = useState([]);
    const sales = useStore(state => state.sales);
    const isLoaded = useStore(state => state.isLoaded);
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const id = user._id;

    useEffect(() => {
      const getSales = async () => {
          try {
              const res = await axios.get(!user.isAdmin 
                  ? "http://localhost:3001/orders/productowner/" + id 
                  : "http://localhost:3001/orders"
              );
              console.log(res.data);
              useStore.setState({ sales: res.data });
              useStore.setState({ isLoaded: true });
          } catch (error) {
              console.log(error);
          }
      };
      getSales();
  }, [id, user.isAdmin]);

 
  
  

    const filteredSales = sales.filter(
      (sale) =>
        sale.customerName.toLowerCase().includes(search.toLowerCase()) ||
        sale.status.toLowerCase().includes(search.toLowerCase())
    );

    //delete order 
    const handleDelete = (PId) => {
      //setSales(prev => prev.filter(item => item._id !== PId));
      useStore.setState({sales: sales.filter(item => item._id !== PId)})
    };


    if (!isLoaded) {
     return( <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>)}

  return (
    <div className="widgetLg">
    <h3 className="widgetLgTitle">Latest transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Status</th>
        <th><TextField style={{height:30}} id="outlined-basic" label="Search" variant="outlined" 
        onChange={(e) => {
          setSearch(e.target.value);


        }}
        />
</th>
      </tr>
      
      {sales?filteredSales.map((sale) => (<tr className="widgetLgTr" key={sale._id}>
        <td className="widgetLgUser" >
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{sale.customerName}</span>
        </td>
        <td className="widgetLgDate">{format(sale.createdAt)}</td>
        <td className="widgetLgAmount">${sale.amount}</td>
        <td className="widgetLgStatus">
          <Button type={sale.status} />
        </td>
        <td style={{width:60}}>
        <td style={{width:20}}>
        <Modal keepMounted PId={sale._id} handleDelete={handleDelete}/>
        </td>
        <td style={{width:20}}>
        <KeepMountedInfoModal keepMounted sale={sale} />
        </td>
        <td style={{width:20}}>
        <DialogSelect keepMounted sale={sale} />
        </td>
        </td>

      </tr>)) : <h6>No orders yet</h6>
        }
      
     
    </table>
  </div>
  )
}

export default SalesTable