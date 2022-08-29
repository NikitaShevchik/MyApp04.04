import React from "react";

function Celsi({ temp, setTemp }) {
    let far = (1.8 * temp) + 32;

    return <div>
        Фаренгейт: {far ? far : 'Исправьте цельсий'}
        <br />
        Цельсий:
        <input style={{ width: '50px' }} value={temp} onChange={event => setTemp(event.target.value)} />
    </div>
}

export default Celsi;