import React from 'react'

// templates
import  Head  from "../../templates/service/Head";
import  SerTemp  from "../../templates/service/SerTemp";


// images 
import ser03 from '../../assets/images/service/ser03.jpg'
import ser04 from '../../assets/images/service/ser04.jpg'
import Footer from '../../templates/Footer'
function Service() {
    return (
        <div>
            <Head/>
            <SerTemp src={ser03}/>
            <SerTemp src={ser04}/>
            <SerTemp src={ser04}/>
            <SerTemp src={ser03}/>
            <Footer/>
        </div>
    )
}

export default Service
