import React, { useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from "../tourData";
function TourList() {
  const [tours,setTours] = useState(tourData)
  const removeItem = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !==id);
    console.log(id)
    setTours(newTours);
  }
  return (
    <section className="tourlist">
      {tours.map((tour)=>{
        return <Tour key={tour.id} removeItem={removeItem} {...tour}/>
      })}
    </section>
  );
}
export default TourList;
