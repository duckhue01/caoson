import React from 'react'

// templates 
import ProTemp from "../../templates/projects/ProTemp";
import Head from "../../templates/projects/Head";
import Footer from '../../templates/Footer'

// images 
import proj01 from "../../assets/images/projects/proj01.webp";
import proj02 from "../../assets/images/projects/proj02.webp";
import proj03 from "../../assets/images/projects/proj03.webp";
import proj04 from "../../assets/images/projects/proj04.webp";
import proj05 from "../../assets/images/projects/proj05.webp";
import proj06 from "../../assets/images/projects/proj06.webp";
import proj07 from "../../assets/images/projects/proj07.webp";
import proj08 from "../../assets/images/projects/proj08.webp";
import proj09 from "../../assets/images/projects/proj09.webp";
import proj10 from "../../assets/images/projects/proj10.webp";
import proj11 from "../../assets/images/projects/proj11.webp";
import proj12 from "../../assets/images/projects/proj12.webp";
import proj13 from "../../assets/images/projects/proj13.webp";
import proj14 from "../../assets/images/projects/proj14.webp";
import proj15 from "../../assets/images/projects/proj15.webp";
import proj16 from "../../assets/images/projects/proj16.webp";






const projSet1 = [proj01, proj02, proj03, proj04, proj05, proj16]
const projSet2 = [proj06, proj07, proj08, proj09, proj10, proj11, proj12]
const projSet3 = [proj13, proj14, proj15]
function Project() {
    return (
        <div>
            <Head/>
            <ProTemp src={projSet1}/>
            <ProTemp src={projSet2}/>
            <ProTemp src={projSet3}/>
            <Footer/>
            
        </div>
    )
}

export default Project
