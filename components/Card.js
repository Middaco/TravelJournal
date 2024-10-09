import React from "react"

export default function Card(
        props
){  
    return (
        <div className="destination-card">
            <div className="picture-container">
                <img className="card-picture" src={props.imageUrl} />
            </div>
            <div className="card-details">
                <div className="card-header">
                    <img className="pin" src="../images/pin.png" />
                    <span className="destination-country"> {props.location} </span>
                    <a href={props.googleMapsUrl}> View on Google Maps </a>
                </div>
                <h1 className="card-title"> {props.title} </h1>
                <h4 className="period-traveled">{props.startDate} - {props.endDate}</h4>
                <p className="card-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}