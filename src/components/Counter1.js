// I want to implement counter which has 3 fcuntionality like increment, decrement & reset

import { useState } from 'react';
import Button from './Button';

const Counter1 = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const [message, setMessage] = useState('Event not called');


    const incrementHandler = (msg) => {
        setCount((prevCount) => prevCount + 1);
        setMessage(msg+" is called");
    }

    const decrementHandler = (msg) => {
        setCount((prevCount) => prevCount - 1);
        setMessage(msg+" is called");
    }

    const resetHandler = (msg) => {
        setCount(initialCount);
        setMessage(msg+" is called");
    }

    const template = (
        <div>
            <h1>Count: {count}</h1>
            {/* <button type="button" onClick={() => setCount(initialCount)}>Reset</button>
            <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button> */}
            <Button btnName="Reset" handlerEvent={resetHandler} />
            <Button btnName="Increment" handlerEvent={incrementHandler} />
            <Button btnName="Decrement" handlerEvent={decrementHandler} />

            <h3>Status: {message}</h3>
        </div>
    )

    return template;

}

export default Counter1;
