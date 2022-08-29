import React from "react";

function TempIn({ temp, setTemp, outside, setOutside }) {
    return <div>
        <input value={temp} onChange={event => setTemp(event.target.value)} />
        <br />
        <input value={outside} onChange={event => setOutside(event.target.value)} />
    </div>
}

export default TempIn;