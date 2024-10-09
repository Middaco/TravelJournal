import React from "react"
import Header from "./components/Header"
import ListOfDestinations from "./components/ListOfDestinations"
export default function App(){
    return (
        <div className="main-container">
            <Header />
            <ListOfDestinations />
        </div>
    )
}