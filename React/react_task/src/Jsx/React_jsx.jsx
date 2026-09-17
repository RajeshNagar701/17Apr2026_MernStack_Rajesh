

/*

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any 
createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

*/


import React from 'react'

import './mystyle.css' // import external css


function React_jsx() {

    var name = "Raj Nagar";
    const myelement = <h1>I Love JSX!</h1>;
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;
    const myelement2 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

    var mystyle = { color: 'red', backgroundColor: 'yellow' }

    return (
        <div>

            <h1>Hi i am : {name}</h1>
            <hr />
            {myelement}
            <hr />
            {myelement1}
            <hr />
            {myelement2}

            <hr />

            <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hi i am inline css</h1>
            <h1 style={mystyle}>Hi i am internal css</h1>

            <hr />

            <h1 className='myhead'>Hi i am external css</h1>
            <h1 class='myhead'>Hi i am external css</h1>


            <hr />

            <div>
                <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hi i am inline css</h1>
                <h1 className="myhead">Hi i am external css</h1>
            </div>


        </div>
    )
}

export default React_jsx