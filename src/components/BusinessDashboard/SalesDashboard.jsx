import React from 'react'
import SalesTable from './SalesTable.jsx'
import IncomeItem from './IncomItem.jsx'
import TransactionsItem from './Transactions.jsx'
import Chart from './Chart.jsx'


function SalesDashboard() {


  return (
    <div style={{display:"flex" , flexDirection:"column",paddingTop:90}}>
      <div>
      <div><IncomeItem/></div>
      {/* <div><TransactionsItem/></div> */}
      </div>
      <div style={{marginTop:30}}><Chart/></div>

       
        <div><SalesTable/></div>
    </div>
  )
}

export default SalesDashboard