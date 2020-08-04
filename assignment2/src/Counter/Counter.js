import React from 'react';

const buttonStyle = {
    display: 'incline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'   
}

const counter = () => {
   return(
       <div>
           <button style={buttonStyle}>+</button>
            <div>0</div>
           <button style={buttonStyle}>-</button>
       </div>
   ) 
}

export default counter;