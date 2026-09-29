/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}

print : {this.state.name}

Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})

*/


import React, { Component } from 'react'
import Img_class from './Img_class';

export class State_class extends Component {
    constructor() {
        super();
        this.state = {
            name: "Rajesh Nagar",
            number: 1,
            isImage: true
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({name: "Raj Nagar"})}>Change</button>
                <h1>{this.state.name}</h1>

                <hr />

                <button onClick={() => this.setState({number: this.state.number + 1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => { if(this.state.number>0) { this.setState({number: this.state.number - 1 })}}}>-</button>

                <hr />
                <button onClick={() => this.setState({isImage: false })}>Hide</button>
                <button onClick={() => this.setState({isImage: true })}>Show</button>
                <button onClick={() => this.setState({isImage: !this.state.isImage })}>Show/Hide</button>
                {
                    this.state.isImage ? <Img_class /> : null
                }

            </div>
        )
    }
}

export default State_class