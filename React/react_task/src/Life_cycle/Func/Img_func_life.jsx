import React, { useEffect } from 'react'

function Img_func_life() {

    useEffect(()=>{
        console.log('component Did Mount (Birth)')
    },[]);

    useEffect(()=>{
        return(()=>{
            console.log('component Will Unmount (Death)')
        })
    },[]);
    

    return (
        <div>
            <img width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswweu8EsUn0AUcQXZfSYc_37pdGx5gre-nF01MbzoPD10Kf_29YpMJqaV&s=10" alt="" />
        </div>
    )
}

export default Img_func_life