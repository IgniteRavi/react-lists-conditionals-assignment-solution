import React from 'react';


export const CharComponent = (props) => {

    const style = {
        display: "inline-block",
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }
    return (
        <div style={style} onClick={props.click}>
            <h5>{props.value} </h5>
        </div>
        
    );
}