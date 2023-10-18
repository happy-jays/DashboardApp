// Sidebar.js
import React from 'react';
import { Sidebar , Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import RocketIcon from '@mui/icons-material/Rocket';
import HelpIcon from '@mui/icons-material/Help';
import TokenRoundedIcon from '@mui/icons-material/TokenRounded';
import { Link } from "react-router-dom";
// import 'react-pro-sidebar/dist/css/styles.css';

const Sidenav = () => {
  return (
    <Sidebar className='sidebar' backgroundColor="rgb(4,4,64)">
       <div className='sdbr-ttl'>
        <icon>{<TokenRoundedIcon />}</icon>
        <h2>Dashboard</h2>
        </div> 
      <Menu iconShape="square" className='menu' >
       <MenuItem icon={<DashboardIcon />} className="active-menu-item"component={<Link to="/" className="link" />}>Dashboard</MenuItem>
        <SubMenu label="Product" title="Product" icon={<ViewInArSharpIcon />}>
          <MenuItem>Product 1</MenuItem>
        </SubMenu>
        <SubMenu label="Customers" title="Customers" icon={<PeopleRoundedIcon />}>
          <MenuItem>Customer 1</MenuItem>
        </SubMenu>
        <SubMenu label="income" title="Income" icon={<PaidRoundedIcon />}>
          <MenuItem>Income Page</MenuItem>
        </SubMenu>
        <SubMenu label="Promote" title="Promote" icon={<RocketIcon />}>
          <MenuItem>Promote Page</MenuItem>
        </SubMenu>
        <SubMenu label="help" title="Help" icon={<HelpIcon />}>
          <MenuItem>Help Page</MenuItem>
        </SubMenu>
      </Menu>
      <div className="user-profile">
        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?size=626&ext=jpg&ga=GA1.1.569673517.1697630220&semt=sph" alt="User" />
        <div className="user-info">
          <span>Evana</span>
          <span>Project Manager</span>
        </div>
      </div>
    </Sidebar>
  );
};

export default Sidenav;
