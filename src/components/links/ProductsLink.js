import React from 'react';
import MenuItem from "../MenuItem";

const ProductsLink = (props) => {

    if (!props.login) {
        return null;
    }

    return <MenuItem title={"products"}
                     onclick={() => {
                         props.websocket.send({
                             state: "products"
                         })
                     }}/>;
};

export default ProductsLink;