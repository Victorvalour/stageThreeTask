import React, { useEffect, useState } from "react";
import car1 from  "../images/car1.jpg"
import car2 from  "../images/car2.jpg"
import car3 from  "../images/car3.jpg"
import car4 from  "../images/car4.jpg"
import car5 from  "../images/car5.jpg"
import car6 from  "../images/car6.jpg"
import Mark from  "../images/mark.png"
import car7 from  "../images/car7.jpg"
import car8 from  "../images/car8.jpg"
import car9 from  "../images/car9.jpg"
import car10 from  "../images/car10.jpg"
import car11 from  "../images/car11.jpg"
import car12 from  "../images/car12.jpg"
import car13 from  "../images/car13.jpg"
import car14 from  "../images/car14.jpg"
import car15 from  "../images/car15.jpeg"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ToastContainer, toast } from "react-toastify";


const cars = [
    {   name: "Avantador 1",
        id: "car1",
        src: car1,
    
    },
    {   name: "Rolls Royce",
        id: "car2",
        src: car2
    },
    {   name: "Lamborghini 1",
        id: "car3",
        src: car3
    },
    {   name: "Lamborghini 2",
        id: "car4",
        src: car4
    },
    {   name: "Peugout 1",
        id: "car5",
        src: car5
    },
    {   name: "Mark",
        id: "Mark",
        src: Mark
    },
    {   name: "Mercedes",
        id: "car6",
        src: car6
    },
    {   name: "Ferrari 2",
        id: "car7",
        src: car7
    },
    {   name: "Rolls Royce 2",
        id: "car8",
        src: car8
    },
    {   name: "Mitsubishi",
        id: "car9",
        src: car9
    },
    {   name: "Mercedes 2",
        id: "car10",
        src: car10
    },
    {   name: "Toyota 1",
        id: "car11",
        src: car11
    },
    {   name: "Nissan",
        id: "car12",
        src: car12
    },
    {   name: "Lexus 1",
        id: "car13",
        src: car13
    },
    {   name: "Porshe",
        id: "car14",
        src: car14
    },
    {   name: "Ford",
        id: "car15",
        src: car15
    },

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
   console.log(results);
   toast.info('Item dropped', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  


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
  const handleDragStart = (start) => {
    console.log("Drag started", start)
    toast.info('Car picked, Release to drop', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   }

    return (<div>

        {/* Search container*/}
        <div className="bg-sky-300 flex flex-col md:flex-row "> <div className="text-lg">Search your dream car:</div>
        <input type="text" onChange={e => setQuery(e.target.value)} className="border-2 border-green-500 md:ml-8 md:w-64 mb-4" /></div>


        <DragDropContext onDragEnd={handleDragDrop} onDragStart={handleDragStart}>
        <Droppable droppableId="ROOT" type="group">  
        {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}  className="bg-sky-200 h-[100%]">
       
          
            <div className="flex gap-5 flex-wrap md:mx-6 justify-center">
                 {mycars.map((car, index) => (
                    <Draggable draggableId={car.id} key={car.id} index={index}>
                        {(provided) => (
                             <div className="border-2 border-sky-500 shadow-[0_6px_8px_0_rgba(0,0,0,0.75)]
                            " {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}><img src={car.src} alt="" className="w-60 h-60 md:w-96"/>
                             <p className="bg-gray-400 text-lg text-center font-bold">{car.name}</p></div>
                        )}
               
                </Draggable>
            ))}
              
            </div>
            <ToastContainer />
      
        </div> )}
        </Droppable>
        </DragDropContext>

        <p className="text-center text-white bg-black">&copy; Victor-V </p>
        </div>
    )
}