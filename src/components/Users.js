import React from 'react';
import PropTypes from 'prop-types';

Users.propTypes = {
    items: PropTypes.arrayOf()
};

/**
 * @return {null}
 */
function Users(props) {

    if (!props.items) {
        return null;
    }

    const items = props.items.map(item => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
    });

    return (
        <div>
            <h2>users</h2>
            <ul>{items}</ul>
        </div>

    );
}

export default Users;