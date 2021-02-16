import React from 'react'

// components 

import Button from "../../components/Button";


// images 
import proj01 from "../../assets/images/home/proj01.webp";
import proj02 from "../../assets/images/home/proj02.webp";
import proj03 from "../../assets/images/home/proj03.webp";
import proj04 from "../../assets/images/home/proj04.webp";
import proj05 from "../../assets/images/home/proj05.webp";


function Project() {
    return (
        <div className="h-auto w-screen ">
            <img src={proj01} className=" w-11/12 h-auto mx-auto border"/>
            <img src={proj02} className=" w-11/12 h-auto mx-auto border"/>
            <img src={proj03} className=" w-11/12 h-auto mx-auto border"/>
            <img src={proj04} className=" w-11/12 h-auto mx-auto border"/>
            <img src={proj05} className=" w-11/12 h-auto mx-auto border"/>
            <Button name='View all' className=" border border-black w-11/12 mx-auto "/>

        </div>
    )
}

export default Project