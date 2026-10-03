import React, { useContext } from 'react'
import { Mydata } from './A'



function D() {

  const { name, setName } = useContext(Mydata);

  return (
    <div>
      <button onClick={() => setName("Pinal Nagar")}>Change</button>
      <h1>Hi i am from D : {name}</h1>
    </div>
  )
}

export default D