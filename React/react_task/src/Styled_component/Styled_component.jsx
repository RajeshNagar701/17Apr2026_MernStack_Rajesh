/*

styled-components

styled-components is a popular library for React that uses CSS-in-JS to style components. 
It leverages JavaScript's tagged template literals, allowing you to write actual 
CSS directly inside your React files to create components with embedded, automatically scoped styles

=> npm install styled-components


=> import styled from 'styled-components';
*/



import React from 'react'
import styled from 'styled-components';


function Styled_component() {

    const Myhead = styled.h1`
  font-size: 1.5rem;
  color: white;
  font-family: sans-serif;
  background-color:purple;
  text-align:center;
`;

    const Basic = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    color:white;
    display:block;
    margin:0 auto;
    background-color:LightGray;
    `;
    const Btn_red = styled(Basic)`
    background-color:red;
  `;

    const Btn_green = styled(Basic)`
    background-color:green;
  `;

    const Btn_blue = styled(Basic)`
    background-color:blue;
  `;
    const Btn_orange = styled(Basic)`
    background-color:orange;
  `;



    const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }`

    const Props_btn = styled.button`
    background: ${props=>props.primary ? "palevioletred" : "White"} ;
    color: ${props=>props.primary ? "White" : "palevioletred" };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;


    return (
        <div>
            <Myhead>
                <h1>Hello my Custome Head</h1>
            </Myhead>
            <hr />

            <Basic>Basic Btn</Basic>
            <Btn_red>Red Button</Btn_red>
            <Btn_blue>Blue Button</Btn_blue>
            <Btn_green>Green Button</Btn_green>
            <Btn_orange>Orange Button</Btn_orange>

            <hr />
            <MyButton>Hello MyButton</MyButton>

            <hr />

            <Props_btn>Hello withaout </Props_btn>
            <Props_btn primary>Hello with </Props_btn>
        </div>
    )
}

export default Styled_component