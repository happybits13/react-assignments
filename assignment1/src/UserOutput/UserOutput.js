import React from 'react'
import './UserOutput.css';

const userOutput = (props) =>{
    return(
        <div class="UserOutput">
            <p>{props.username}</p>
            <p>para 2</p>
        </div>
    );
}

export default userOutput;