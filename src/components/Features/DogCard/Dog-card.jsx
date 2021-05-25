import React from 'react'

export default function DogCard(props) {
    return (
        <div className="cards" 
        style={props.age<4? {backgroundColor:"yellow 5px solid"} : {border:"green 5px solid"}}>
            <h2>Name : {props.name}</h2>
            <h3>Type: {props.type}</h3>
            <h3>Age: {props.age}</h3>
            <img src={props.picture} alt="dog picture"/>
        </div>
    )
}
