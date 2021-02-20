import React from 'react'


// images 
import aboutImg from "../../assets/images/about.jpg";
const About = () => {
    return (
        <div className="bg-extend01 w-full md:col-start-2 md:col-span-10 md:flex md:flex-row md:border md:border-extend02 md:h-screen ">
            <img src={aboutImg} alt="" className="w-full md:w-1/2 md:h-auto md:object-cover " />
            <div className="p-10 md:w-1/2  md:border-l md:border-extend02">
                <h2 className="text-3xl text-white py-4 md:text-5xl md:font-bold ">Ve Chung Toi</h2>
                <h3 className=" text-extend02 text-xl pb-4  md:text-3xl md:font-medium">Newel Residential Remodeling</h3>
                <p className="text-white tracking-wide text-lg">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            
        </div>
    )
}

export default About
