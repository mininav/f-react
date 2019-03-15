import React, { useState } from 'react';
import './ProductNode.css';
import PropTypes from 'prop-types';

ProductNode.propTypes = {
    node: PropTypes.object
};

/**
 * @return {null}
 */
function ProductNode(props) {

    const items = props.node.childNodes ? Object.keys(props.node.childNodes).map(key => {
        return (
            <ProductNode key={key} node={props.node.childNodes[key]}/>
        )
    }) : null;

    const [hidden, setHidden] = useState(true);

    const onClick = (e) => {
        e.stopPropagation();
        setHidden(!hidden);
    };

    return (
        <li onClick={onClick} className={"node"}>{props.node.name}
            <ul className={hidden ? "hidden" : ""}>{items}</ul>
        </li>
    );
}

export default ProductNode;