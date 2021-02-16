
// component 
import { Button } from "../../components/Button";


// templates 
import Main from "../../templates/home/Main";
import Service from "../../templates/home/Service";
import About from "../../templates/home/About";
import Project from "../../templates/home/Project";
import Contact from "../../templates/home/Contact";



const Home = ()=> {

    
    return(
        
        <div>
            <Main/>
            <Service/>
            <About/> 
            <Project/>     
            <Contact/>     
        </div>
    )
}


export default Home
