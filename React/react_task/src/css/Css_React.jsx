import React from 'react'

import './mystyle1.css'
import './mystyle2.css'


function Css_React() {

    const mystyle = { color: 'red', backgroundColor: 'yellow', textAlign: 'centre' }

    return (
        <div>
            <h1 style={{ color: 'red', backgroundColor: 'yellow', textAlign: 'centre' }}>Inline css </h1>
            
            <h1 style={mystyle}>Inline css </h1>

            <h1 className='biggreen'> Hi i am External css</h1>
        </div>
    )
}

export default Css_React