import React, { useEffect, useState } from "react";
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
    {   name: "car2",
        id: "car2",
        src: car2
    },
    {   name: "car3",
        id: "car3",
        src: car3
    },
    {   name: "car4",
        id: "car4",
        src: car4
    },
    {   name: "car5",
        id: "car5",
        src: car5
    },
    {   name: "car6",
        id: "car6",
        src: car6
    },
    {   name: "car7",
        id: "car7",
        src: car7
    },
    {   name: "car8",
        id: "car8",
        src: car8
    },
    {   name: "car9",
        id: "car9",
        src: car9
    },
    {   name: "car10",
        id: "car10",
        src: car10
    }

]


export default function Gallery() {

    

            //SEARCH FUNCTION
const [query, setQuery] = useState('')

            //DRAG AND DROP FUNCTIONS
    const [mycars, setMycars] = useState(cars);

    useEffect(() => {
        const getFilteredCars = (query) => {
            if (!query) {
           setMycars(cars)
            } else {
           setMycars(cars.filter(car => car.name.includes(query)));
        }} 
      getFilteredCars(query);
    }, [query])

const handleDragDrop = (results) => {
   const {source, destination, type} = results;
   console.log(results)

    if (!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return;
    if (type === 'group') {
        const reorderedCars = [...mycars];
        
        const sourceIndex = source.index;
        const destinationIndex = destination.index;

        const [removedCar] = reorderedCars.splice(sourceIndex, 1);
        reorderedCars.splice(destinationIndex, 0, removedCar);
setMycars(reorderedCars)
    }

  }

    return (<div>

        {/* Search container*/}
        <div> <div>Search your dream car</div>
        <input type="text" onChange={e => setQuery(e.target.value)} className="border-2 border-green-500" /></div>


        <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="ROOT" type="group">  
        {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}  className="bg-red-600">
       
          
            <div className="flex gap-5 flex-wrap md:mx-52">
                 {mycars.map((car, index) => (
                    <Draggable draggableId={car.id} key={car.id} index={index}>
                        {(provided) => (
                             <div className="border-2 border-sky-500" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}><img src={car.src} alt="" className="w-60 h-60"/>
                             <p>{car.name}</p></div>
                        )}
               
                </Draggable>
            ))}
              
            </div>
     
      
        </div> )}
        </Droppable>
        </DragDropContext>
        </div>
    )
}