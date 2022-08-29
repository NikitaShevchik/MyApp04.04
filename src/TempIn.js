import React from "react";

function TempIn({ temp, setTemp }) {
    return <input value={temp} onChange={event => setTemp(event.target.value)} />
}

export default TempIn;