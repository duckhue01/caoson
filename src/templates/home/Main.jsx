import React, { useEffect, useState } from "react";


// components 
import  Button  from "../../components/Button";
import  Branch  from "../../components/Branch";

import  CenterText  from "../../components/CenterText";

// templates
import Menu from "../Menu";

// icons
import { BiMenu } from "react-icons/bi";

const Main  = () => {


    const [isOpen, setIsOpen] = useState(false)

    const menuHandle = () => {
        setIsOpen(!isOpen)
       
    }
    return(
        <div>
            {isOpen ? <Menu/> : null}
            <Button name="Call Now" className="border-b w-screen border-white bg-extend01 text-white tracking-wider font-semibold text-lg"/>
            <div className="w-screen  bg-extend01 flex justify-between ">
                        <Branch branch="Cao Son" className="p-4 text-white  tracking-wider font-semibold text-lg"/>
                        <BiMenu 
                            size={30} 
                            className="m-3 text-white z-20"
                            onClick={menuHandle}
                        
                        />
            </div>
            
            <div className="relative w-screen flex h-96">
                <div className=" h-full absolute w-full bg-bg-main bg-cover opacity-35 ">               
                </div>
                <div className="h-full absolute bg-extend01 w-full opacity-40">                
                </div>
                <CenterText 
                    text="asdasdasd" 
                    subtext="CenterText"           
                    className="text-white z-10 w-full text-center
                    px-4 top-1/3 absolute"
                />

            </div>
        </div>
    )
}

export default Main