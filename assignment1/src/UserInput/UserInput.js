// 2 ways to create components
// Method 1: Extend from existing React components
// Method 2: Create your own fxn/class. Use Fxn if you do not intend to create states(unless you use ReactHook).
import React from 'react';

const userInput = (props) =>{
    const inputStyle = {
        border: '2px solid red'
    }

    return(
        <input type="text" style={inputStyle} onChange={props.change} value={props.name}></input>
    );
}

export default userInput;