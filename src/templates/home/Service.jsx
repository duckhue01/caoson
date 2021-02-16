// components 
import  Button  from "../../components/Button";
import classNames from "classnames";

// images 
import serImg from "../../assets/images/service.webp";



const Service = ({className}) => {
        
    return(
        <div className={classNames(
            className
        )}>
            <div className="border-b border-black">
                <h2> Dich Vu</h2>
                <ul>
                    <li>complete remodeling</li>
                    <li>kitchen remodeling</li>
                    <li>bathroom remodeling</li>
                    <li>home interior</li>

                </ul>
                <Button name="MORE INFOR" className="border border-black w-40"/>

                <img src={serImg} className="w-screen h-auto"/>
                <div className="bg-black text-white w-screen flex h-32">
                    <div className="w-1/2 text-center">
                        <HomeIcon className="w-12 m-auto"/>
                        <p>Vast Experience</p>
                    </div>
                    <div className="w-1/2 text-center"> 
                        <HomeIcon className="w-12 m-auto"/>
                        <p>Vast Experience</p>
                    </div>
                </div>
                <div className="bg-black text-white w-screen flex h-32">
                    <div className="w-1/2 text-center">
                        <HomeIcon className="w-12 m-auto"/>
                        <p>Vast Experience</p>
                    </div>
                    <div className="w-1/2 text-center">
                        <HomeIcon className="w-12 m-auto"/>
                        <p>Vast Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HomeIcon({className}) {
    return (
        <svg 
            className={
                classNames(
                    className
                )
            }
            preserveAspectRatio="xMidYMid meet" data-bbox="20.005 16.396 160 167.324" viewBox="20.005 16.396 160 167.324"  xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid--5in1ve-rxds2s"><defs><style dangerouslySetInnerHTML={{__html: "#comp-k0exfi6c svg [data-color=\"1\"] {fill: #9A8A78;}" }} /></defs><title id="svgcid--5in1ve-rxds2s" />
            <g>
                <path fill="#978673" d="M162.524 183.72H37.486V81.18h3.746v98.793h117.545V81.18h3.747v102.54z" data-color={1} />
                <path fill="#978673" d="M177.356 99.045L99.995 21.694 22.654 99.045l-2.649-2.649 79.99-80 80.01 80-2.649 2.649z" data-color={1} />
            </g>
        </svg>
      );
}

















export default Service