import React from "react";

function Employee({ name, surname, fathername, salary }) {

    return <p>Emloyee name: {name} {fathername} {surname}. Salary: {salary} rub</p>
}

export default Employee;