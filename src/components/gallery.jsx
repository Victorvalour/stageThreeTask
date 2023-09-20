import React from "react";
import car1 from  "../images/car1.jpg"
import car2 from  "../images/car2.jpg"
import car3 from  "../images/car3.jpg"
import car4 from  "../images/car4.jpg"
import car5 from  "../images/car5.jpg"
import car6 from  "../images/car6.jpg"
import car7 from  "../images/car7.jpg"
import car8 from  "../images/car8.jpg"
import car9 from  "../images/car9.jpg"
import car10 from  "../images/car10.jpg"



export default function Gallery() {
    return (
        <div className="flex gap-5 flex-wrap">
            <img src={car1} alt="" className="w-60 h-60" />
            <img src={car2} alt="" className="w-60 h-60"/>
            <img src={car3} alt="" className="w-60 h-60"/>
            <img src={car4} alt="" className="w-60 h-60"/>
            <img src={car5} alt="" className="w-60 h-60"/>
            <img src={car6} alt="" className="w-60 h-60"/>
            <img src={car7} alt="" className="w-60 h-60"/>
            <img src={car8} alt="" className="w-60 h-60"/>
            <img src={car9} alt="" className="w-60 h-60"/>
            <img src={car10} alt="" className="w-60 h-60"/>
        </div>
    )
}