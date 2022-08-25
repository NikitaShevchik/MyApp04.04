import React from "react";

function UserCard({ name, surname, fathername, salary, id }) {
    return <div>
        Name: <span>{name}</span>
        <br />
        Surname: <span>{surname}</span>
        <br />
        Fathername: <span>{fathername}</span>
        <br />
        Salary: <span>{salary}  RUB</span>
        <br />
        id: <span>{id}</span>
        <br />
        -----------------------
    </div>
}

export default UserCard;