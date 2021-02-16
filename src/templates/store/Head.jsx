import React, { useState}from 'react'

// components 
import  Button  from "../../components/Button";
import  Branch  from "../../components/Branch";

// templates
import Menu from "../Menu";

// icons
import { BiMenu } from "react-icons/bi";

const Head = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuHandle = () => {
        setIsOpen(!isOpen)
       
    }
    return (
        <div>
            {isOpen ? <Menu/> : null}
            <Button name="Call Now" className="border-b w-screen border-white bg-black text-white"/>
            <div className="w-screen  bg-black flex justify-between ">
                        <Branch branch="Cao Son" className="p-4 text-white"/>
                        <BiMenu 
                            size={30} 
                            className="m-3 text-white z-20"
                            onClick={menuHandle}
                        
                        />
            </div>
            <div className="w-screen h-16 leading-16 text-center border">Store</div>
        
        </div>
    )
}

export default Head
