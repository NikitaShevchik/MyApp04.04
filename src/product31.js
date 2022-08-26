import React from "react";



function Product31({ id, name, cost, isEdit, toggleMode, editProd }) {
    return <div style={{ padding: '5px', border: '1px solid #000', width: '200px', margin: '0 0 10px 0' }}>
        Name: {isEdit ? <input onChange={event => editProd(id, 'name', event)} value={name} /> : <span>{name}</span>}
        <br />
        Cost: {isEdit ? <input onChange={event => editProd(id, 'cost', event)} value={cost} /> : <span>{cost} BYN</span>}
        <br />
        <button onClick={() => toggleMode(id)}>
            {isEdit ? 'Save' : 'Edit'}
        </button>
    </div>
}

export default Product31;