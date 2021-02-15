import React from "react";
import { FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";

// components 
import  {Button, ButtonBorder} from "../components/Button";

export default function Menu() {
    return(
        <div className="bg-black h-screen w-screen flex flex-col justify-center absolute z-10">
            <Button name="HOME" color="white" className="ml-auto mr-auto text-white"/> 
            <Button name="SERVICES" className="ml-auto mr-auto text-white"/> 
            <Button name="PROJECTS" className="ml-auto mr-auto text-white" /> 
            <Button name="CONTACT" className="ml-auto mr-auto text-white"/>           
            <div className="flex ml-auto mr-auto mt-10 justify-between w-32">
                <FaFacebookF color="white" size={20} />
                <FaInstagram color="white"size={20}/>
                <FaGithub color="white"size={20}/>

            </div>

                 
        </div>
    )
}