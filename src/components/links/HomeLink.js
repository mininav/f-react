import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "../MenuItem";

HomeLink.propTypes = {
    login: PropTypes.object,
    websocket: PropTypes.object
};

/**
 * @return {null}
 */
function HomeLink(props) {

    if(!props.login) {
        return null;
    }

    return <MenuItem title={"Home Page"}
                     onclick={() => {
                         props.websocket.send({
                             state: "start"
                         })
                  }}/>;

}

export default HomeLink;