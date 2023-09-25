import React from "react"

const Card = (props) => {
    return (
        <div className="main-card">
            <img className="card-img" src = {`../images/${props.imageUrl}`} />
            <div className = "card-content">
                <div className = "card-location">
                    <img src="../images/location-icon.svg" />
                    <span className = "card-country">{props.location}</span>
                    <span><a className="card-location-link" href={props.googleMapsUrl}>View on Google Maps</a></span>              
                </div>
                <h2>{props.title}</h2>
                <p className = "card-date"> {`${props.startDate} - ${props.endDate}`}</p>
                <p>{props.description}</p>            
            </div>            
        </div>
    )
}

export default Card