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
            <ProductNode key={key} websocket={props.websocket} node={props.node.childNodes[key]}/>
        )
    }) : null;

    const [hidden, setHidden] = useState(true);

    const onClickHideShow = (e) => {
        e.stopPropagation();
        setHidden(!hidden);
    };

    const onClick = (e) => {
        e.stopPropagation();
        props.websocket.send({
            getProducts: {id: props.node.id}
        })
    };

    return (
        <li onDoubleClick={onClickHideShow} className={"node"}><div onClick={onClick}>{props.node.name}</div>
            <ul className={hidden ? "hidden" : ""}>{items}</ul>
        </li>
    );
}

export default ProductNode;