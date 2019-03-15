import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductNode from "./ProductNode";

ProductRoot.propTypes = {
    root: PropTypes.object
};

function ProductRoot(props) {

    const items = props.root.childNodes ? Object.keys(props.root.childNodes).map(key => {
        return (
            <ProductNode key={key} node={props.root.childNodes[key]}/>
        )
    }) : null;

    return (
        <ul className={"root"}>
            {items}
        </ul>
    );
}

export default ProductRoot;