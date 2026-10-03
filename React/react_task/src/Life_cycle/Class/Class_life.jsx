/*

lifecycle of a class component
describes the different stages a component passes through from its creation 
to its removal from the page. These stages are managed through 
built-in lifecycle methods that allow you to execute code at specific moments

1. Mounting Phase (Birth) => componentDidMount()
2. Updating Phase (Growth) => componentDidUpdate()
3. Unmounting Phase (Death) => componentWillUnmount()
*/

import React, { Component } from 'react'
import Img_class_life from './Img_class_life';

export class Class_life extends Component {
    constructor() {
        super();
        this.state = {
            number: 1,
            isImage: true
        }
    }

    componentDidUpdate(){
         console.log('component Did Update (Update)')
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => { if (this.state.number > 0) { this.setState({ number: this.state.number - 1 }) } }}>-</button>

                <hr />
                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Show/Hide</button>
                {
                    this.state.isImage ? <Img_class_life /> : null
                }
            </div>
        )
    }
}

export default Class_life