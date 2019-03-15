import MenuItem from "../MenuItem";
import React from "react";
import PropTypes from 'prop-types'

Logout.propTypes = {
    login: PropTypes.object,
    websocket: PropTypes.object
};

/**
 * @return {null}
 */
function Logout(props) {

    if(!props.login) {
        return null;
    }

    return <MenuItem title={"Выйти"} onclick={evt => {
        props.websocket.send({
            logout: {}
        })
    }}/>
}

export default Logout