import React from "react";
import "./IncomeItem.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIncon from '@mui/icons-material/ArrowUpward';
import axios from "axios";
import { useEffect, useState } from "react";
import useStore from '../../store/store'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';




function IncomeItem() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);
    const sales = useStore(state => state.sales);
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const id = user._id;
    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await axios.get("http://localhost:3001/orders/incomeByOwner/"+id);
                console.log(res.data)
                setIncome(res.data);
                if (res.data.length > 1) {
                  setPerc((res.data[1].total * 100) / res.data[0].total - 100);
                }           }
            catch (error) {
                console.log(error);
            }
        };
        getIncome();
    }, [sales]);

  return (
    <>
    <div className="featuredItem">
      <span className="featuredTitle">Revenue</span>
      <div className="featuredMoneyContainer">
        {/* <span className="featuredMoney">{income[1]?.total}</span> */}
        <span className="featuredMoneyRate">
        %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownwardIcon className="featuredIcon negative" />
            ) : (
              <ArrowUpwardIncon className="featuredIcon" />
            )}        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
     <div className="featuredItem">
     <span className="featuredTitle">Income</span>
     <div className="featuredMoneyContainer">
       <span className="featuredMoney">{income[1]?.total}</span>
       <span className="featuredMoneyRate">
      <MonetizationOnIcon className="featuredIcon" ></MonetizationOnIcon>     </span>
     </div>
     <span className="featuredSub">This Month</span>
   </div></>

  );
}

export default IncomeItem;