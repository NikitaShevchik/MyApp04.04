import React from "react";
import ProductField from "./productField";


function Product31({ id, name, cost, isEdit, toggleMode, editProd }) {
    return <div style={{ padding: '5px', border: '1px solid #000', width: '200px', margin: '0 0 10px 0' }}>
        Name: <ProductField
            id={id}
            text={name}
            isEdit={isEdit}
            type="name"
            editProd={editProd}
        />
        <br />
        Cost: <ProductField
            id={id}
            text={name}
            isEdit={isEdit}
            type="cost"
            editProd={editProd}
        />
        <br />
        <button onClick={() => toggleMode(id)}>
            {isEdit ? 'Save' : 'Edit'}
        </button>
    </div>
}

export default Product31;