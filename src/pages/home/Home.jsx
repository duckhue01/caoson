import React, { useEffect, useState } from "react";


// components 
import { Button } from "../../components/Button";
import { Branch } from "../../components/Branch";
import { BiMenu } from "react-icons/bi";
import  CenterText  from "../../components/CenterText";

// templates
import Menu from "../../templates/Menu";

const Home = ()=> {

    const [isOpen, setIsOpen] = useState(false)

    const menuHandle = () => {
        setIsOpen(!isOpen)
       
    }
    useEffect( () => {
        console.log(isOpen);
    })



    return(
        
        <div className="">
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
            
            <div className="relative w-screen flex h-96">
                <div className=" h-full absolute w-full bg-bg-main bg-cover opacity-35 ">               
                </div>
                <div className="h-full absolute bg-gray-800 w-full opacity-40">                
                </div>
                <CenterText 
                    text="asdasdasd" 
                    subtext="CenterText"           
                    className="text-white z-0 w-full text-center
                    px-4 top-1/3 absolute"
                />

            </div>
            {/* our services */}
            <div className="border-b border-black">
                <h2> Dich Vu</h2>
                <ul>
                    <li>complete remodeling</li>
                    <li>kitchen remodeling</li>
                    <li>bathroom remodeling</li>
                    <li>home interior</li>

                </ul>
                <Button name="MORE INFOR" className="border border-black w-40"/>
            </div>
            
        </div>
    )
}


export default Home
