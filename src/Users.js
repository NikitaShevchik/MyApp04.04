import React from "react";

function Users({ name, id, date, banned, banUser }) {
    return <div style={{ border: '1px solid #000', padding: '10px', width: '200px', margin: '0 0 20px 0' }}>
        Username: <span>{name}</span>
        <br />
        Joinded: <span>{name}</span>
        <br />
        Status: <span>{banned ? 'Banned' : 'Active'}</span>
        <br />
        <button style={{ cursor: 'pointer' }} onClick={() => banUser(id)}>{banned ? 'Unban' : 'Ban'}</button>
    </div>
}


// Редактирование стейта родителя в дочернем компоненте

export default Users;