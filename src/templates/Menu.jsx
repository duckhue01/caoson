import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";
import {
    
    Link
} from "react-router-dom";

// components 
import  Button from "../components/Button";


// icons
import { BiMenu } from "react-icons/bi";

// Context 
import {AppContext} from '../App'



export default function Menu() {

    const {isMenuOpen, menuHandle}= useContext(AppContext)

    if (isMenuOpen) {
        return(
            <div className="bg-black h-screen w-screen flex flex-col justify-center absolute z-10">
                <BiMenu 
                    size={30} 
                    className="m-3 text-white z-20"
                    onClick={menuHandle}
                
                />
                <Link to='/' >
                    <Button name="HOME" color="white" className="ml-auto mr-auto text-white" menuHandle={menuHandle}/> 
                </Link>
                <Link to='/service'>
                    <Button name="SERVICE" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/> 
                </Link>
                <Link to='projects'>
                    <Button name="PROJECTS" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/> 
                </Link>                
                <Link to='store'>
                    <Button name="STORE" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/>
                </Link>
                <Link >
                    <Button name="CONTACT" className="ml-auto mr-auto text-white" menuHandle={menuHandle}/>  
                </Link>    
                                  
                <div className="flex ml-auto mr-auto mt-10 justify-between w-32">
                    <FaFacebookF color="white" size={20} />
                    <FaInstagram color="white"size={20}/>
                    <FaGithub color="white"size={20}/>
    
                </div>
    
                     
            </div>
        )

    } else {
        return (
            <BiMenu 
                size={30} 
                className="m-3 text-white z-20"
                onClick={menuHandle}
            
            />
        )

    }

    
}


