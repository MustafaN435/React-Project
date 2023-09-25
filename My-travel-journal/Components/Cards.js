import React from "react";
import data from "../data"
import Card from "./Card.js"

const Cards = () => {
    const cards = data.map(item => {
        return(
            <Card 
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    })
    
    return <div>{cards}</div>
}

export default Cards