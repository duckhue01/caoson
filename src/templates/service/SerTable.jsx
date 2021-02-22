
import classNames from "classnames";


import React from 'react'

// images 
import ser03 from '../../assets/images/service/ser03.jpg'
import ser04 from '../../assets/images/service/ser04.jpg'


const SerTable = ({className}) => {
    return (
        <div
            className={
                classNames(
                    className,
                    " md:col-start-2 md:col-end-12 md:grid-cols-8 md:grid grid grid-cols-1 md:border md:border-extend02 md:grid-rows-3"
                )
            }
        >
            {/* this is row 1 */}
            <div
                className="md:col-start-0 md:col-span-2 md:border-r md:border-b md:border-extend02 text-white font-bold text-4xl text-center md:py-40 leading-16 md:bg-extend02"                   
            >Dich Vu Cua Chung Toi</div>
           
            <div 
                className= "md:col-start-3 md:col-span-2 md:border-r md:border-b md:border-extend02 "
            >       
                
                <div className="p-5 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl md:text-2xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                </div>
            </div>
            <div 
                className= "md:col-start-5 md:col-span-4 md:flex "
            >       
                
                <div className="p-5 md:w-1/2 md:border-r md:border-b md:border-extend02 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl md:text-2xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I</div>
                </div>
                <img src={ser03} className="w-screen h-auto md:w-1/2 md:object-cover md:border-b md:border-extend02" alt="" /> 
            </div>

            {/* this is row  2 */}
            <div 
                className= "md:col-start-5 md:col-span-2 md:border-r md:border-b md:border-extend02 md:row-start-2 "
            >       
                 
                <div className="p-5 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl">omplete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  I</div>
                </div>
            </div>
            

            <div 
                className= "md:col-start-7 md:col-span-2  md:border-b md:border-extend02 md:row-start-2"
            >       
                
                <div className="p-5 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  I</div>
                </div>
            </div>
            <div 
                className= "md:col-start-0 md:col-span-4 md:flex md:row-start-2"
            >       
                <img src={ser04} className="w-screen h-auto md:w-1/2 md:border-r md:border-b md:object-cover md:border-extend02" alt="" /> 
                <div className="p-5 md:w-1/2 md:border-r md:border-b md:border-extend02 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl ">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  I</div>
                </div>
            </div>
            <div
                className="md:col-start-0  md:col-start-0 md:col-span-2 md:border-r md:border-b md:border-extend02 text-white font-bold text-4xl text-center py-20 leading-16"                   
            >Dich Vu Cua Chung Toi</div>
            <div 
                className= "md:col-start-3 md:col-span-2 md:flex "
            >       
                
                <div className="p-5 md:border-r  md:border-extend02 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w. I</div>
                </div>
            </div>
            <div 
                className= "md:col-start-5 md:col-span-2  md:border-r  md:border-extend02"
            >       
                 
                <div className="p-5 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                </div>
            </div>

            <div 
                className= "md:col-start-7 md:col-span-2  "
            >       
                
                <div className="p-5 md:py-10 md:px-6 md:font-semibold md:tracking-wider">
                    <div className="text-extend02 mb-5 text-xl">Complete Remodeling</div>
                    <div className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </div>
            </div>
             
            
            
        </div>
    )
}






export default SerTable
