import React from "react";

function Users({ username, id, date, banned, banUser, isEdit, editMode, editChanges }) {
    return <div style={{ border: '1px solid #000', padding: '10px', width: '200px', margin: '0 0 20px 0' }}>
        Username: {isEdit ? <input value={username} onChange={event => editChanges(id, 'username', event)} /> : <span>{username}</span>}
        <br />
        Joinded: {isEdit ? <input value={date} onChange={event => editChanges(id, 'date', event)} /> : <span>{date}</span>}
        <br />
        Status: <span>{banned ? 'Banned' : 'Active'}</span>
        <br />
        <button style={{ cursor: 'pointer' }} onClick={() => banUser(id)}>{banned ? 'Unban' : 'Ban'}</button>
        <button style={{ cursor: 'pointer' }} onClick={() => editMode(id)} >{isEdit ? 'Save' : 'Edit'}</button>
    </div>
}


// Редактирование стейта родителя в дочернем компоненте

export default Users;