import React, { useState } from 'react';

const Clock = (name) => {
    const [count, setCount ] = useState(0);
    const 
    return (
        //myVar = setInterval(function, milliseconds);
        //clearInterval(myVar);
        <div>
            <h1>Hello {name}!</h1>
            <h2>{Time.now}</h2>
            <div>
                <button onClick={()=> {setCount(count += 1)}}>
                    Count
                </button>
            </div>
        </div>
    )
}

/*
Q3
Write a React component called Clock that takes a ‘name’ as a property. 
It should render a div containing a 
•   h1, with a string, “Hello, <name>!”
•   h2, with, current time updated every second
Add an additional div with a label ‘Count’ and a field with initial value 0. Add a button ‘Increment count’ that increments the count on each click.

Reference API to set and clear a timer in JavaScript
    myVar = setInterval(function, milliseconds);
clearInterval(myVar);
*/
