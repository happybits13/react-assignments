import React from 'react'

const checkLength = (inputLength) => {
    if (inputLength < 3) 
        return "Input length too short"
    else
        if (inputLength > 10) 
            return "Input length too long"
        else
            return "Input length within acceptable range"
}


// Main function
const validation = (props) => {
    return(        
        <p>{checkLength(props.inputLength)}</p>
    )
}

export default validation;