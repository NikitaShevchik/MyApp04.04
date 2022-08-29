import React from "react";
import UserField from "./userField";

function Users({ username, id, date, banned, banUser, isEdit, editMode, editChanges }) {
    return <div style={{ border: '1px solid #000', padding: '10px', width: '200px', margin: '0 0 20px 0' }}>
        Username: <UserField
            text={username}
            id={id}
            isEdit={isEdit}
            type='username'
            editChanges={editChanges}
        />
        <br />
        Joinded: <UserField
            text={date}
            id={id}
            isEdit={isEdit}
            type='date'
            editChanges={editChanges}
        />
        <br />
        Status: <span>{banned ? 'Banned' : 'Active'}</span>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ cursor: 'pointer' }} onClick={() => banUser(id)}>{banned ? 'Unban' : 'Ban'}</button>
            <button style={{ cursor: 'pointer' }} onClick={() => editMode(id)} >{isEdit ? 'Save' : 'Edit'}</button>
        </div>
    </div>
}


// Редактирование стейта родителя в дочернем компоненте

export default Users;