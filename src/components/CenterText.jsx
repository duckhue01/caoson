import classNames from "classnames";
import React, { useState,useLayoutEffect, useEffect } from "react";


import {motion, useMotionValue, useViewportScroll} from 'framer-motion'

function CenterText({text, subtext, className }) {

    const [scroll, setScroll] = useState(window.scrollY);
    useLayoutEffect(() => {
        function updateSize() {
            setScroll(window.scrollY);
        }
        window.addEventListener('scroll', updateSize);
        updateSize();
        
      }, [window.scrollY]);
    return(
        <motion.div className={
            classNames(
                className
            )}
        animate={{
            y:-scroll * 0.5
        }}
        
        >
            <div className="text-3xl text-center md:text-5xl md:font-extrabold ">{text}</div>
            <div className="text-lg text-center md:text-3xl md:font-normal md:my-10">{subtext}</div>            
        </motion.div>
    )
}

export default CenterText;