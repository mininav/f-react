import React, {useEffect, useState} from 'react';
import Websocket from "../utils/Websocket";
import PropTypes from 'prop-types'
import ProductRoot from "../components/ProductRoot";

ProductsPage.propTypes = {
    websocket: PropTypes.instanceOf(Websocket),
    login: PropTypes.object

};

function ProductsPage(props) {

    const[root, setRoot] = useState({});
    useEffect(() => {

        props.websocket.send({
            getProductTree: {}
        });

        const prop = "productTree";
        const id = props.websocket.addMsgEventListener(prop, root => {
            setRoot(root);
        });

        return () => {
            props.websocket.removeMsgEventListener(prop, id);
        }
    }, []);

    return(
        <div>
            <h1>Products 123</h1>
            <ProductRoot root={root}/>
        </div>
    )
}

export default ProductsPage;