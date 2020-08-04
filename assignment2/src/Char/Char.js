import React from 'react';
import './Char.css';

// 2 methods of applying style
// Method 1: Create a style object and assign to the style attribute of the element
// Method 2: Create a .css file and apply style

const char = (props) => {
// ==========
// Method 1 
// ==========
// const charStyle = {
//     display: 'inline-block',
//     padding: '16px',
//     textAlign: 'center',
//     margin: '16px',
//     border: '1px solid black'
// }; 

// =========
// Method 2 
// =========
// Create Char.css


    return(
        // Method 1 of applying style
        // <div style={charStyle}>test</div>
    <div className='Char' onClick={props.clicked}>{props.character}</div>
    )
}


export default char;