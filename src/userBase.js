import React from "react";

function UserTable({ name, surname, fathername, salary }) {
    return <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{fathername}</td>
        <td>{salary} rub</td>
    </tr>
}

export default UserTable;