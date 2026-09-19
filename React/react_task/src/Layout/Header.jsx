import React from 'react'

function Header({tittle,desc}) {
    return (
        <div className="p-5 bg-primary text-white text-center">
            <h1>{tittle}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Header
