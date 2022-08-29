import React from "react";
import UserBigField from "./UserBigField";


function UserBigSetter({ id, name, surname, password, changeItem }) {
    return <tr>
        <UserBigField
            id={id}
            type='name'
            value={name}
            changeItem={changeItem}
        />
        <UserBigField
            id={id}
            type='surname'
            value={surname}
            changeItem={changeItem}
        />
        <UserBigField
            id={id}
            type='password'
            value={password}
            changeItem={changeItem}
        />
    </tr>
}

export default UserBigSetter;