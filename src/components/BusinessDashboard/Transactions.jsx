import React from "react";
import "./IncomeItem.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIncon from '@mui/icons-material/ArrowUpward';
import axios from "axios";
import { useEffect, useState } from "react";
import useStore from '../../store/store'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



function TransactionsItem() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);
    const sales = useStore(state => state.sales);
    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await axios.get("http://localhost:3001/orders/income");
                console.log(res.data)
                setIncome(res.data);
                if (res.data.length > 1) {
                  setPerc((res.data[1].total) );
                }else {setPerc(res.data[0].total)}            }
            catch (error) {
                console.log(error);
            }
        };
        getIncome();
    }, [sales]);

  return (
    <div className="featuredItem">
      <span className="featuredTitle">Income</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{income[1]?.total}</span>
        <span className="featuredMoneyRate">
       <MonetizationOnIcon></MonetizationOnIcon>     </span>
      </div>
      <span className="featuredSub">This Month</span>
    </div>
  );
}

export default TransactionsItem;