import React, { useState } from "react";

function UserBigField({ id, type, value, changeItem }) {
    let [isEdit, setEdit] = useState(false);
    return <td>
        {isEdit ? <input value={value} onChange={event => changeItem(id, type, event)} onBlur={() => setEdit(false)} /> : <span onClick={() => setEdit(true)}>{value}</span>}
    </td>
}

export default UserBigField;