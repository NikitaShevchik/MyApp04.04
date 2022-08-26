import React from "react";


function ProductField({ isEdit, id, editProd, text, type }) {
    return isEdit ? <input onChange={event => editProd(id, type, event)} value={text} /> : <span>{text} BYN</span>
}

export default ProductField;