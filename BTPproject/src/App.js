import  './App.module.css';
import Landingpage from "./components/Landingpage.js";
import Login from "./components/Login";

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import SideMenu from "./components/SideMenu"
import { useState } from "react";

import {
    Routes,
    Route,
  } from "react-router-dom";

export default function App(){
    const [isMenuActive,setIsMenuActive] = useState(false);
    let [menu,setmenu]=useState(null);
    console.log(isMenuActive)
    const check=(thatMenu)=>{
        if(!menu)
            setmenu(thatMenu)
        setIsMenuActive(true)
        
    }
    const clickedFunc=(e)=>{
        console.log(e.target);
        if(menu && !menu.current.contains(e.target))
            setIsMenuActive(false);
    }
    return (
        <div className="Appmain">

            <div  onClick={clickedFunc}>
            <Routes>
                <Route  path="/" element={
                    <>
                        <Login />
                    </>
                } />
                <Route  path="/profile" element={
                    <>
                        <Navbar setIsMenuActive={check} />
                    </>
                } />
                <Route  path="/resume" element={
                    <>
                        <Navbar setIsMenuActive={check} />
                        <Search searchCount={2000} isSearchActive={true} />
                    </>
                } />
                <Route  path="/resume_analyzer" element={
                    <>
                        <Navbar setIsMenuActive={check} />
                    </>
                } />
                <Route  path="feed" element={
                    <>
                        <Navbar setIsMenuActive={check} />
                        <Landingpage />
                    </>
                } />
                <Route  path="jobs" element={<Navbar setIsMenuActive={check} />} />
                <Route   path="notices" element={<Navbar setIsMenuActive={check} />} />
            </Routes> 
            <br />
            
            {/* <Search searchCount={2000} isSearchActive={true} /> */}
            <br />
            </div>
            <SideMenu isMenuActive={isMenuActive} />
        </div>
    );
}