import React, { useContext } from 'react'

import {AppContext} from '../../App'
// templates
import  Head  from "../../templates/Head";
import  SerTable  from "../../templates/service/SerTable";



import Footer from '../../templates/Footer'
function Service() {
    const  {isMenuOpen} = useContext(AppContext)
    const homeStyle = isMenuOpen ? "h-screen overflow-y-hidden" : ""    
    return (
        <div className={homeStyle + "grid grid-cols-1  md:grid md:grid-cols-12 md:gap-0 bg-extend01 md:w-c"}>
            <Head 
                className="  col-span-1 md:col-start-1 md:col-span-12 md:relative"
            />
            <SerTable
                className="col-span-1 md:col-start-1 md:col-span-12 mt-20 md:mt-40"
            />
            
                
            <Footer/>
        </div>
    )
}

export default Service
