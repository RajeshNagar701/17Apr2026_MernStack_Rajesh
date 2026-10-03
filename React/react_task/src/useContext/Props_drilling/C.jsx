import React from 'react'
import D from './D'

function C({name}) {
  return (
    <div>
        <h1>Hi i am from C </h1>
        <D name={name}/>
    </div>
  )
}

export default C