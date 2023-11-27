import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import ShowComp from './components/showcomponents/ShowComp';
import { HashRouter , Routes, Route } from "react-router-dom";
import Button from './components/uicomponents/buttons/Buttons';
import './styles/allmediaquery.css'
import Videos from './components/uicomponents/video/Videos';
import ToggleButton from './components/uicomponents/togglebtn/ToggleButton';
function App() {
  return (
    <>
    
    <HashRouter >
<Navbar/>
<div className="dashboard ph-5 d-flex">

      <Routes>
      <Route index element={<Home/>} />
        <Route path="/components" element={<Dashboard/>}>
          <Route path="avatar" element={<ShowComp/>} />
          <Route path="button" element={<Button />} />
          <Route path="video" element={<Videos />} />
          <Route path="toggle" element={<ToggleButton />} />
        </Route>
      </Routes>
      </div>


    </HashRouter >
    </>
  );
}

export default App;
