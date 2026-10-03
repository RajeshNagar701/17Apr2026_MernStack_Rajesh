import React from 'react'
import C from './C'

function B({name}) {
  return (
    <div>
        <h1>Hi i am from B </h1>
        <C name={name}/>
    </div>
  )
}

export default B