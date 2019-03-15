import React from 'react';
import MenuItem from "../MenuItem";

const AdminLink = (props) => {

    if ((!props.login || props.login.role !== 'ADMIN')) {
        return null;
    }

    return <MenuItem title={"Администрирование"} onclick={() => {
        props.websocket.send({
            state: "admin"
        })
    }}/>;
};

export default AdminLink;