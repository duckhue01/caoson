import React, { useState,useLayoutEffect, useEffect } from "react";
import classNames from "classnames";

// components 
import  Button  from "../components/Button";
import  Branch  from "../components/Branch";

// emplates
import Menu from "./Menu";
import Navbar from './Navbar'


const Head  = ({className}) => {
    const [size, setSize] = useState(window.innerWidth);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      
    }, []);

    
   
    
    return(
        <div 
          className={
            classNames(
                className,
                " "
            )}
        >
           
            <Button 
                name="Call Now" 
                className="border-b w-full border-white bg-extend01 text-white tracking-wider font-semibold text-lg
                md:hidden md:w-full "
            />
            <div className="w-full  bg-extend01 flex justify-between  md:w-full">
                        <Branch branch="Cao Son" className="text-white z-10 tracking-wider font-semibold text-lg  cursor-pointer m-3 md:p-3 border md:m-10"/>
                        {size <= 768 ? <Menu/> : <Navbar/>}
            
            </div>
        </div>
    )
}

export default Head
