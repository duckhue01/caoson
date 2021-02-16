import React from 'react'

import classNames from "classnames";


function Button({name, className}) {

  
    return(
        <div 
            className={ 
                classNames(
                    "h-10 w-24 text-center leading-10  cursor-pointer",                   
                    className
                )
            }  
                  
        >
            {name}
        </div>
    
    )
}

export default Button;