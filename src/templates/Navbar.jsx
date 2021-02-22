import React, {useContext} from 'react'
import {
    Link
} from "react-router-dom";
import Button from "../components/Button";

import {AppContext} from '../App'

const Navbar = () => {
    const { menuHandle}= useContext(AppContext)
    return (
        <div className="flex flex-row justify-between absolute z-10  w-6/12 right-32  p-3 m-10 text-lg font-semibold">
            <Link to='/' >
                    <Button name="HOME" color="white" className="ml-auto mr-auto text-white" /> 
                </Link>
                <Link to='/service'>
                    <Button name="SERVICE" className="ml-auto mr-auto text-white "/> 
                </Link>
                <Link to='projects'>
                    <Button name="PROJECTS" className="ml-auto mr-auto text-white " /> 
                </Link>                
                <Link to='store'>
                    <Button name="STORE" className="ml-auto mr-auto text-white " />
                </Link>
                <Link >
                    <Button name="CONTACT" className="ml-auto mr-auto text-white"/>  
                </Link>
        </div>
    )
}

export default Navbar
