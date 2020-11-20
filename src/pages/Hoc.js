import React from 'react';
import ClickCounter from '../components/ClickCounter';
import HoverCounter from '../components/HoverCounter';

const Hoc = () => {
    return (
        <div className="container mt-5">
            <ClickCounter name="Anmol" />
            <hr/>
            <HoverCounter name="Sarath" />
        </div>
    )
}

export default Hoc;