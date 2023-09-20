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

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const cars = [
    {   name: "car1",
        id: "car1",
        src: car1,
    
    },
    {   name: "car1",
        id: "car2",
        src: car2
    },
    {   name: "car1",
        id: "car3",
        src: car3
    },
    {   name: "car1",
        id: "car4",
        src: car4
    },
    {   name: "car1",
        id: "car5",
        src: car5
    },
    {   name: "car1",
        id: "car6",
        src: car6
    },
    {   name: "car1",
        id: "car7",
        src: car7
    },
    {   name: "car1",
        id: "car8",
        src: car8
    },
    {   name: "car1",
        id: "car9",
        src: car9
    },
    {   name: "car1",
        id: "car10",
        src: car10
    }

]

export default function Gallery() {
    return (<div>
        <DragDropContext onDragEnd={() => {console.log("drag and drop has occured")}}>
           
        <div>
        <Droppable droppableId="ROOT" type="group">
           {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex gap-5 flex-wrap">
                 {cars.map((car, index) => (
                    <Draggable draggableId={car.id} key={car.id} index={index}>
                        {(provided) => (
                             <div className="border-2 border-sky-500" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}><img src={car.src} alt="" className="w-60 h-60"/>
                             <p>{car.name}</p></div>
                        )}
               
                </Draggable>
            ))}
            </div>
           )}
           </Droppable>
        </div>
        
        </DragDropContext>
        </div>
    )
}