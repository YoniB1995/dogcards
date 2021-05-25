import React from 'react'
import DogCard from '../../Features/DogCard/Dog-card'
export default function Home() {
    const dogArr = [
        {name:"Katie" , type:"German-Sheperd"  , age:"2" ,picture:"images/german_sheperd.jpeg" },
        {name:"Tony" , type:"Pitbull"  , age:"7" , picture:"images/pitbull.jpeg"},
        {name:"Didi" , type:"Pug"  , age:"5" , picture:"images/pug.jpeg"},
        {name:"Roxi" , type:"Chihuahua"  , age:"10" , picture:"images/chiuaha.jpeg"}
    ]
    const dogs = dogArr.map((index,i)=>{
               return(<DogCard key={i} name={index.name} type={index.type} age={index.age} picture={index.picture} />)});
    return (
        <div className="container">
            
            {dogs}
            
        </div>
    )
}
