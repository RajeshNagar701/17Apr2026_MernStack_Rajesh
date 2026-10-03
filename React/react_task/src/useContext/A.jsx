import React, { createContext } from 'react'
import { useState } from 'react'
import B from './B';

export const Mydata = createContext();

function A() {

  const [name, setName] = useState("Raj Nagar");



  return (
    <div>
      <Mydata.Provider value={{name,setName}}>
        <button onClick={()=>setName("Akash Nagar")}>Change</button>
        <h1>Hi i am from A : {name}</h1>
        <B />
      </Mydata.Provider>
    </div>
  )
}

export default A