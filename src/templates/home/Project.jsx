/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

// components 

import Button from "../../components/Button";


// images 
import proj01 from "../../assets/images/home/proj01.jpg";
import proj02 from "../../assets/images/home/proj02.jpg";
import proj03 from "../../assets/images/home/proj03.jpg";
import proj04 from "../../assets/images/home/proj04.jpg";
import proj05 from "../../assets/images/home/proj05.jpg";


function Project() {
    return (
        <div className="w-full bg-extend01 md:col-start-2 md:col-span-10 md:w-full ">
            <div className="p-10 border-t border-extend02 md:p-0 ">
                <div className="text-3xl text-white py-4 md:py-20 md:text-center"> Du An Gan Day</div>
                <div className="md:grid md:grid-cols-12 md:grid-rows-2 md:gap-x-5 md:gap-y-16">
                    <img src={proj01} className="w-full h-auto mx-auto my-5 border border-extend02 md:col-start-6 md:col-end-13 md:row-start-1"/>
                    <img src={proj02} className="w-full h-auto mx-auto my-5 border border-extend02 md:col-start-1 md:col-end-3 md:row-start-1  md:self-end " />
                    <img src={proj03} className="w-full h-auto mx-auto my-5 border border-extend02 md:col-start-3 md:col-end-5 md:row-start-1 " />
                    <img src={proj04} className="w-full h-auto mx-auto my-5 border border-extend02 md:col-start-1 md:col-end-3 md:row-start-1 "/>
                    <img src={proj05} className="w-full h-auto mx-auto my-5 border border-extend02 md:col-start-3 md:col-end-5 md:row-start-1 md:self-end"/>
                    <Button name='VIEW ALL' className=" bg-extend02 w-full mx-auto text-white md:row-start-2 md:col-start-6 md:col-span-2 "/>
                </div>
            </div>
            
            

        </div>
    )
}

export default Project
