import React from 'react';
import PropTypes from 'prop-types';

MenuItem.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func
};

function MenuItem({title, onclick}) {
    return (
        <button className={"menu-item"} onClick={onclick}>
            {title}
        </button>
    )
}

export default MenuItem;