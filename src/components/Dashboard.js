// Dashboard.js
import React, { useState } from 'react';
import Content from './Content';
import '../App.css';
import Sidenav from './Sidebar';
import { Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
//   const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="dashboard-container">
      <Sidenav />
      {/* <Content selectedPage= "Dashboard" /> */}
      <section className='content'>
        <Routes>
          <Route path="/" element={<Content />} />
          </Routes>
      </section>
    </div>
  );
};

export default Dashboard;
