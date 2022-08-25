import React from "react";


function Product({ id, name, cost, inCart, addToCart }) {
    return <div style={{ border: '1px solid #000', width: '200px', padding: '10px', margin: '0 0 20px 0' }}>
        Name: <span>{name}</span>
        <br />
        Cost: <span>{cost}</span>
        <br />
        <span>{inCart ? 'In cart' : 'Not in cart'}</span>
        <br />
        <button onClick={() => addToCart(id)}>{inCart ? 'Remove from cart' : 'Add to cart'}</button>
    </div>;
}

export default Product;