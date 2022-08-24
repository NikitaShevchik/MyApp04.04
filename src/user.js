import React from "react";

function User({ name, age }) {
    return <p>Username: {name}, age: {age}</p>
}

// name и age это так называемые ПРОПСЫ (props), поэтому можно заменить:

function User1(props) {
    return <p>Username: {props.name}, age: {props.age}</p>
}
// Но принято сразу деструктиризировать, как в первом примере!!!


export default User;

