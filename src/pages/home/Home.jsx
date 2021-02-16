
// component 
import { Button } from "../../components/Button";


// templates 
import Main from "../../templates/home/Main";
import Service from "../../templates/home/Service";
import About from "../../templates/home/About";
import Project from "../../templates/home/Project";
import Footer from "../../templates/Footer";



const Home = ()=> {

    
    return(
        
        <div>
            <Main/>
            <Service/>
            <About/> 
            <Project/>     
            <Footer/>     
        </div>
    )
}


export default Home
