import React, { useState,useLayoutEffect, useEffect } from "react";


import {motion, useMotionValue, useViewportScroll} from 'framer-motion'

// components 
import  Button  from "../../components/Button";
import  Branch  from "../../components/Branch";

import  CenterText  from "../../components/CenterText";

// templates
import Menu from "../Menu";
import Navbar from '../Navbar'


const Main  = () => {
    const [size, setSize] = useState(window.innerWidth);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      
    }, []);

    
   
    
    return(
        <div className=" col-span-1 md:col-start-1 md:col-span-12">
           
            <Button 
                name="Call Now" 
                className="border-b w-full border-white bg-extend01 text-white tracking-wider font-semibold text-lg
                md:hidden md:w-full "
            />
            <div className="w-full  bg-extend01 flex justify-between md:absolute md:w-full">
                        <Branch branch="Cao Son" className="text-white z-10 tracking-wider font-semibold text-lg  cursor-pointer m-3 md:p-3 border md:m-10"/>
                        {size <= 768 ? <Menu/> : <Navbar/>}
            
            </div>
            
            <div className="relative w-full flex h-96 md:h-screen md:w-full ">
                <div className=" h-full absolute w-full bg-small-main bg-cover opacity-35 md:bg-big-main bg-fixed">               
                </div>
                <div className="h-full absolute bg-extend01 w-full opacity-40">                
                </div>
                <div>
                    <CenterText 
                        text="Newel Residential Remodeling" 
                        subtext="Recreating Dream Homes That Last"           
                        className="text-white w-full text-center
                        px-4 top-1/3 absolute md:top-2/4"
                        
                    />
                </div>

            </div>
        </div>
    )
}

export default Main