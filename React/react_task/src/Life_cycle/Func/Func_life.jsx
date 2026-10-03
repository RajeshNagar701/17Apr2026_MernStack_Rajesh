/*
React useEffect Hooks (Component Lifecycle)

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)


*/

import React, { useEffect, useState } from 'react'
import Img_func_life from './Img_func_life'

function Func_life() {
    const [data, setData] = useState({
        number: 1,
        isImage: false
    })

    useEffect(()=>{
        console.log('component Did Update (Update)');
    },[data.number]);

    return (
        <div>
            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>

            <hr />
            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Show/Hide</button>
            {
                data.isImage ? <Img_func_life /> : null
            }
        </div>
    )
}

export default Func_life