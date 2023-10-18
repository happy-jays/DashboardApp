// Content.js
import React from 'react'
import MonthlyEarningsChart from './MonthlyEarningsChart';
import DonutChart from './DonutChart';
import "../App.css";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

function Content() {
 
  return (
    <>
    <div className='content-head'>
    <h3 className='content-head-h3'>Hello Happy 👋</h3>
    <input placeholder='🔍 search'></input>
    </div>
    <div className='content-row1'>
      <div className='content-row1-col1'>
        
        <div className='content-row1-col1-col1'>
           <icon className='icn' >{<MonetizationOnOutlinedIcon style={{ fontSize: '5rem' }}/>}</icon>
        </div>
        <div className='content-row1-col1-col2'>
           <p>Earning</p>
           <h3>$198K</h3>
           <p>37.8% this month</p>
        </div>
        
      </div>
      <div className='content-row1-col2'>
      <div className='content-row1-col2-col1'>
           <icon className='icn' >{<ArticleOutlinedIcon style={{ fontSize: '5rem' }}/>}</icon>
        </div>
        <div className='content-row1-col1-col2'>
           <p>Orders</p>
           <h3>$2.4K</h3>
           <p>2% this month</p>
        </div>
      </div>
      <div className='content-row1-col3'>
      <div className='content-row1-col3-col1'>
           <icon className='icn' >{<AccountBalanceWalletOutlinedIcon style={{ fontSize: '5rem' }}/>}</icon>
        </div>
        <div className='content-row1-col1-col2'>
           <p>Balance</p>
           <h3>$2.4K</h3>
           <p>2% this month</p>
        </div>
      </div>
      <div className='content-row1-col4'>
      <div className='content-row1-col4-col1'>
           <icon className='icn' >{<LocalMallOutlinedIcon style={{ fontSize: '5rem' }}/>}</icon>
        </div>
        <div className='content-row1-col1-col2'>
           <p>Total Sales</p>
           <h3>$89K</h3>
           <p>11% this month</p>
        </div>
      </div>
    </div>
    <div className='content-row2'>
    <div className='content-row2-col1'>
    <MonthlyEarningsChart />
    </div>
      <div className='content-row2-col2'>
        <DonutChart />
      </div>
    </div>
    </>
  )
}

export default Content