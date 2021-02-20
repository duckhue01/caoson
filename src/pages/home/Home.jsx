import React, { useContext,useLayoutEffect, useState , useEffect} from 'react'

import {AppContext} from '../../App'
import { motion, useViewportScroll } from "framer-motion"

// component 
import { Button } from "../../components/Button";


// templates 
import Main from "../../templates/home/Main";
import Service from "../../templates/home/Service";
import About from "../../templates/home/About";
import Project from "../../templates/home/Project";
import Footer from "../../templates/Footer";
import { FaYenSign } from 'react-icons/fa';



const Home = ()=> {

    const  {isMenuOpen} = useContext(AppContext)
   
    
    const homeStyle = isMenuOpen ? "h-screen overflow-y-hidden" : ""    
    return(
        
        <div className={homeStyle + "grid grid-cols-1  md:grid md:grid-cols-12 md:gap-0 md:bg-extend01"}
        >
        
            <Main />
            <Service/>
            <About/> 
            <Project/>     
            <Footer/>
        
               
        </div>
    )
}


export default Home
