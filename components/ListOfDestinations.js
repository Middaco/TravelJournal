import React from "react"
import Card from "./Card"
import data from "../data"

export default function ListOfDestinations(){
    return (
        data.map((card) =>
            <div className="card-container">
                <Card 
                    {...card}
                />
                <hr className="divider"/>
            </div>
        )
        
    )
}