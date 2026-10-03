import React from 'react'
import { useState } from 'react'
import B from './B';

function A() {
  
  const [name,setName]=useState("Raj Nagar");
  
  return (
    <div>
        <h1>Hi i am from A : {name}</h1>
        <B name={name}/>
    </div>
  )
}

export default A