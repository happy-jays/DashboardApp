import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;