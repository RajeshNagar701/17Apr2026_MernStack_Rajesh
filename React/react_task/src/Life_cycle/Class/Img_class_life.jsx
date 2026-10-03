import React, { Component } from 'react'

export class Img_class_life extends Component {

    componentDidMount(){
        console.log('component Did Mount (Birth)')
    }

    componentWillUnmount(){
        console.log('component Will Unmount (Death)')
    }

    render() {
        return (
            <div>
                <img width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswweu8EsUn0AUcQXZfSYc_37pdGx5gre-nF01MbzoPD10Kf_29YpMJqaV&s=10" alt="" />
            </div>
        )
    }
}

export default Img_class_life