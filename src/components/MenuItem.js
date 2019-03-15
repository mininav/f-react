import React from 'react';
import PropTypes from 'prop-types';

MenuItem.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func
};

function MenuItem(props) {
    return (
        <button className={"menu-item"} onClick={props.onclick}>
            {props.title}
        </button>
    )
}

export default MenuItem;