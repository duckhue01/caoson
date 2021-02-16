import React from 'react'


// images 
import aboutImg from "../../assets/images/about.webp";
const About = () => {
    return (
        <div>
            <h2>Ve Chung Toi</h2>
            <h3>Newel Residential Remodeling</h3>
            <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <img src={aboutImg}/>
        </div>
    )
}

export default About
