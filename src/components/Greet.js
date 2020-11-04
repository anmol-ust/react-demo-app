import { useState } from 'react';

const Greet = (props) => {
    const initialValue = "Training"
    const [heading, setHeading] = useState(initialValue);

    return (
        <div>
            {/* <h1>{heading}</h1> */}
            <div>
                {/* {props.name} is working on {props.technology} */}
                <button type="button" onClick={() => setHeading('React Training')}>{heading}</button>
            </div>
        </div>
    );
}

export default Greet;