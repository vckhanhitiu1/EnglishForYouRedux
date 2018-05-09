import React from 'react';

const HelloWorld = ({Click, Reset, message}) =>{
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={Click}>Click</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default HelloWorld;