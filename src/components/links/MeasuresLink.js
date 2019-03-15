import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "../MenuItem";

MeasuresLink.propTypes = {
    login: PropTypes.object

};

/**
 * @return {null}
 */
function MeasuresLink(props) {

    if (!props.login) {
        return null;
    }

    return <MenuItem title={"Единицы"}
                     onclick={() => {
                         props.websocket.send({
                             state: "measures"
                         })
                     }}/>;
}

export default MeasuresLink;