
/*
state  ( Object Variable mutable/changeble)

React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

State not work in Func component before 2018 so after 2019 version 16.8.0.introduced Hooks 

Hooks allow functions to have access to state and other React features without using classes.
The React useState Hook allows us to track state in a function component.

=> Import useState

=> Create State : 

1)const [name, setName] = useState("Raj Nagar");
2)const [data,setData] = useState({
    id:"1",
    name:"Raj",
    email:"raj@gmail.com"
})

Print state : 
{name}
{data.name}

*/

import React, { useState } from 'react'
import Img_func from './Img_func';

function State_func() {

    const [name, setName] = useState("Raj");
    
    const [data, setData] = useState({
        number: 1,
        name: "Raj",
        isImage:true
    })

    return (
        <div>
            <button onClick={()=>setName("Rajesh")}>Change</button>
            <h1>{name}</h1>
            
            <hr />

            <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
            <h1>{data.number}</h1>
            <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

            <hr />
            <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
            <button onClick={()=>setData({...data,isImage:true})}>Show</button>
            <button onClick={()=>setData({...data,isImage:!data.isImage})}>Show/Hide</button>
            {
                 data.isImage ? <Img_func/> : null
            }
           
        </div>
    )
}

export default State_func