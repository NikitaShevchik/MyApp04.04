import React from "react";

function UserField({ isEdit, id, text, type, editChanges }) {
    return isEdit ? <input value={text} onChange={event => editChanges(id, type, event)} /> : <span>{text}</span>
}

export default UserField;